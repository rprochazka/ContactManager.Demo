using System;
using System.Collections.Generic;

namespace ContactManager.Data.EfCore.Models
{
    public partial class Contact
    {
        public Contact()
        {
            ContactsContactGroups = new HashSet<ContactsContactGroups>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }

        public virtual ICollection<ContactsContactGroups> ContactsContactGroups { get; set; }
    }
}
