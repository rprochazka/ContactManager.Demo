using System.Collections.Generic;
using ContactManager.Common.Exceptions;
using ContactManager.Data.Repository;
using ContactManager.Entities.Models;

namespace ContactManager.Services
{

    public class ContactService: IContactService
    {
        private IContactRepository repository;
        public ContactService(IContactRepository repository)
        {
            this.repository = repository;
        }

        public IEnumerable<ContactModel> GetContacts()
        {
            return repository.GetContacts();
        }

        public IEnumerable<ContactModel> GetContactsByGroupId(int groupId)
        {
            return repository.GetContactsByGroupId(groupId);
        }

        public ContactModel GetContact(int id)
        {
            return repository.GetContact(id);
        }        

        public void DeleteContact(int id)
        {
            repository.DeleteContact(id);
        }

        public IEnumerable<ContactGroupModel> GetContactGroups()
        {
            return repository.GetContactGroups();
        }

        ContactModel IContactService.SaveContact(ContactModel contact)
        {
            if (contact.Id > 0)
            {
                var dbContact = repository.GetContact(contact.Id);
                if (dbContact == null)
                {
                    throw new ResourceNotFoundException($"ContactId {contact.Id} not found.");
                }
            }

            repository.SaveContact(contact);
            return contact;
        }
    }
}
