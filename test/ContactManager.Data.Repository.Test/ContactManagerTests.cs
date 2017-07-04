using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using ContactManager.Common.Configs;
using ContactManager.Data.EfCore;
using ContactManager.Data.Repository.Logging;
using ContactManager.Entities.Models;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Xunit;

namespace ContactManager.Data.Repository.Test
{
    /// <summary>
    /// integration tests to ensure repository works against database as expected
    /// </summary>
    public class ContactManagerTests
    {
        private IContactRepository contactRepository;
        public ContactManagerTests()
        {
            var applicationConfig = new ApplicationConfig
            {
                SqlDbConnectionString =
                    @"Data Source=(localdb)\ProjectsV13;Initial Catalog=ContactManager;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"
            };

            var applicationConfigOptions = Options.Create(applicationConfig);            

            var config = new MapperConfiguration(cfg => {
                cfg.AddProfile<MappingProfile>();
            });
            IMapper mapper = config.CreateMapper();

            var loggerFactory = new LoggerFactory();
            loggerFactory.AddProvider(new EfCoreFilteredLoggerProvider(true));
            var logger = loggerFactory.CreateLogger("ContactRepository");

            var dbContextFactory = new ContactDbContextFactory(applicationConfigOptions, loggerFactory);            

            contactRepository = new ContactRepository(dbContextFactory, mapper, loggerFactory);
        }

        private int CreateNewContact(ContactModel contact)
        {
            //arrange            
            contactRepository.SaveContact(contact);

            //assert 
            var newId = contact.Id;
            Assert.True(newId > 0);

            return newId;
        }

        private IEnumerable<int> CreateNewContacts(IEnumerable<ContactModel> contacts)
        {
            foreach (var contact in contacts)
            {
                yield return CreateNewContact(contact);
            }
        }

        [Fact]
        public void When_AddContact_Then_ContactCreated()
        {
            //arrange
            var newContact = new ContactModel
            {
                FirstName = "Radek",
                LastName = "Prochazka",
                City = "Mnisek",
                Email = "rpp@seznam.cz",
                Groups = new List<int> { 1,2}
            };
            var newId = CreateNewContact(newContact);            

            //act
            var dbContact = contactRepository.GetContact(newId);

            //assert
            Assert.True(dbContact != null);            
            Assert.True(dbContact.FirstName.Equals(newContact.FirstName));
            Assert.True(dbContact.LastName.Equals(newContact.LastName));
            Assert.True(dbContact.City.Equals(newContact.City));
            Assert.True(dbContact.Email.Equals(newContact.Email));
            Assert.True(dbContact.Groups.Contains(1) && dbContact.Groups.Contains(2));
        }

        [Fact]
        public void When_UpdateContact_Then_ContactUpdated()
        {
            //arrange
            var contact = new ContactModel
            {
                FirstName = "Radek",
                LastName = "Prochazka",
                City = "Mnisek",
                Email = "rpp@seznam.cz",
                Groups = new List<int> { 1, 2}
            };
            var newId = CreateNewContact(contact);

            //act
            contact.Id = newId;
            contact.FirstName = "Tomas";
            contact.Groups = new List<int> {2,3};
            contactRepository.SaveContact(contact);
            var dbContact = contactRepository.GetContact(newId);

            //assert            
            Assert.True(dbContact.FirstName.Equals("Tomas"));
            Assert.True(dbContact.LastName.Equals("Prochazka"));
            Assert.True(dbContact.Groups.Contains(2) && dbContact.Groups.Contains(3));
        }

        [Fact]
        public void When_DeleteContact_Then_ContactDeleted()
        {
            //arrange
            var contact = new ContactModel
            {
                FirstName = "Radek",
                LastName = "Prochazka",
                City = "Mnisek",
                Email = "rpp@seznam.cz",
            };
            var newId = CreateNewContact(contact);

            //act
            contactRepository.DeleteContact(newId);
            var dbContact = contactRepository.GetContact(newId);

            //assert            
            Assert.True(dbContact == null);            
        }

        [Fact]
        public void When_GetContactsByGroupId_Then_GetFilteredContacts()
        {
            //arrange
            var contacts = new List<ContactModel>
            {
                new ContactModel
                {
                    FirstName = "Radek",
                    LastName = "Prochazka",
                    City = "Mnisek",
                    Email = "rpp@seznam.cz",
                    Groups = new List<int> {1, 2}
                },
                new ContactModel
                {
                    FirstName = "Tomas",
                    LastName = "Bily",
                    City = "Mnisek",
                    Email = "rpp@seznam.cz",
                    Groups = new List<int> {2, 3}
                },
                new ContactModel
                {
                    FirstName = "Jirka",
                    LastName = "Cerny",
                    City = "Mnisek",
                    Email = "rpp@seznam.cz",
                    Groups = new List<int> {3}
                },
                new ContactModel
                {
                    FirstName = "Jozo",
                    LastName = "Dezo",
                    City = "Mnisek",
                    Email = "rpp@seznam.cz",
                    Groups = new List<int> {1}
                }
            };
            var ids = CreateNewContacts(contacts).ToList();

            //act
            var dbContacts = contactRepository.GetContactsByGroupId(2).Where(i=>ids.Contains(i.Id)).ToList();

            //assert
            Assert.True(dbContacts.Count == 2);
        }


    }
}
