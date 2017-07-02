using System.Collections.Generic;
using ContactManager.Entities.Models;

namespace ContactManager.Data.Repository
{
    public interface IContactRepository
    {
        IEnumerable<ContactModel> GetContacts();
        IEnumerable<ContactModel> GetContactsByGroupId(int groupId);
        ContactModel GetContact(int id);
        void SaveContact(ContactModel contact);
        void DeleteContact(int id);
        IEnumerable<ContactGroupModel> GetContactGroups();
    }
}
