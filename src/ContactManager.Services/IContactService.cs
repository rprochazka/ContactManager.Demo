using System.Collections.Generic;
using ContactManager.Entities.Models;

namespace ContactManager.Services
{
    public interface IContactService
    {        
        IEnumerable<ContactModel> GetContacts(int? groupId);
        ContactModel GetContact(int id);
        ContactModel SaveContact(ContactModel contact);
        void DeleteContact(int id);
        IEnumerable<ContactGroupModel> GetContactGroups();
    }
}
