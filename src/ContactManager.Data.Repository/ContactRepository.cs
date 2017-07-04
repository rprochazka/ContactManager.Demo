using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using ContactManager.Data.EfCore;
using ContactManager.Data.EfCore.Models;
using ContactManager.Data.Repository.Logging;
using ContactManager.Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ContactManager.Data.Repository
{

    public class ContactRepository: IContactRepository
    {               
        private readonly IContactDbContextFactory dbContextFactory;
        private readonly IMapper mapper;
        private readonly ILogger logger;
        public ContactRepository(IContactDbContextFactory contextDbFactory, IMapper mapper, ILoggerFactory loggerFactory)
        {
            this.dbContextFactory = contextDbFactory;
            this.mapper = mapper;

            //TODO - read this from configuration
            bool enableDebugLogs = true;
            loggerFactory.AddProvider(new EfCoreFilteredLoggerProvider(enableDebugLogs));
            logger = loggerFactory.CreateLogger("ContactRepository");
        }

        public IEnumerable<ContactModel> GetContacts()
        {
            using (var dbContext = dbContextFactory.Create())
            {
                var contactsEntities = dbContext.Contact.Include(i => i.ContactsContactGroups).ToList();
                var modelEntities = mapper.Map<IList<Contact>, IEnumerable<ContactModel>>(contactsEntities);
                return modelEntities;
            }            
        }

        public IEnumerable<ContactModel> GetContactsByGroupId(int groupId)
        {
            using (var dbContext = dbContextFactory.Create())
            {
                var contactsEntities = dbContext.Contact.Include(i => i.ContactsContactGroups)
                    .Where(i => i.ContactsContactGroups.Select(y => y.ContactGroupId).Contains(groupId))
                    .ToList();
                var modelEntities = mapper.Map<IList<Contact>, IEnumerable<ContactModel>>(contactsEntities);
                return modelEntities;
            }
        }

        public ContactModel GetContact(int id)
        {
            using (var dbContext = dbContextFactory.Create())
            {
                var contactEntity = dbContext.Contact.Include(i => i.ContactsContactGroups).FirstOrDefault(i=>i.Id == id);
                if (contactEntity != null)
                {
                    return mapper.Map<Contact, ContactModel>(contactEntity);
                }
                return null;
            }
        }

        public void SaveContact(ContactModel contact)
        {
            if (contact.Id > 0)
            {
                UpdateContact(contact);
            }
            else
            {
                var id = AddContact(contact);
                contact.Id = id;
            }            
        }

        private int AddContact(ContactModel contact)
        {
            using (var dbContext = dbContextFactory.Create())
            {
                var entity = mapper.Map<ContactModel, Contact>(contact);
                dbContext.Add(entity);
                dbContext.SaveChanges();
                return entity.Id;
            }
        }

        private void UpdateContact(ContactModel contact)
        {
            using (var dbContext = dbContextFactory.Create())
            {
                var entity = dbContext.Contact.Include(i => i.ContactsContactGroups).FirstOrDefault(i => i.Id == contact.Id);
                if (null != entity)
                {
                    var groupsToDelete = GetGroupsToDelete(entity.ContactsContactGroups, contact.Groups);
                    if (groupsToDelete.Any())
                    {
                        dbContext.RemoveRange(groupsToDelete);
                    }

                    var groupsToAdd = GetGroupsToAdd(entity.ContactsContactGroups, contact.Groups, contact.Id);
                    if (groupsToAdd.Any())
                    {
                        dbContext.AddRange(groupsToAdd);
                    }

                    dbContext.Entry(entity).CurrentValues.SetValues(contact);
                    dbContext.SaveChanges();
                }
            }
        }
        
        private IList<ContactsContactGroups> GetGroupsToDelete(ICollection<ContactsContactGroups> currentContactGroups,
            IList<int> newContactGroups)
        {
            return currentContactGroups.Where(currentContactGroup => !newContactGroups.Contains(currentContactGroup.ContactGroupId)).ToList();            
        }

        private IList<ContactsContactGroups> GetGroupsToAdd(ICollection<ContactsContactGroups> currentContactGroups,
            IList<int> newContactGroups, int contactId)
        {            
            var currentGroupIds = currentContactGroups.Select(i => i.ContactGroupId).ToList();
            return newContactGroups.Where(i => !currentGroupIds.Contains(i)).Select(i => new ContactsContactGroups
            {
                ContactGroupId = i,
                ContactId = contactId
            }).ToList();
        }

        public void DeleteContact(int id)
        {
            using (var dbContext = dbContextFactory.Create())
            {
                var entity = dbContext.Contact.Include(i=>i.ContactsContactGroups).FirstOrDefault(i => i.Id == id);
                if (null != entity)
                {
                    var contactGroups = entity.ContactsContactGroups;
                    dbContext.RemoveRange(contactGroups);                    
                    dbContext.Remove(entity);                    
                    dbContext.SaveChanges();
                }
            }
        }

        public IEnumerable<ContactGroupModel> GetContactGroups()
        {
            using (var dbContext = dbContextFactory.Create())
            {
                var groups = dbContext.ContactGroup.ToList();
                return mapper.Map<IList<ContactGroup>, IEnumerable<ContactGroupModel>>(groups);
            }
        }
    }
}
