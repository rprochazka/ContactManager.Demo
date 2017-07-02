using System;
using System.Collections.Generic;

namespace ContactManager.Data.EfCore.Models
{
    public partial class ContactGroup
    {
        public ContactGroup()
        {
            ContactsContactGroups = new HashSet<ContactsContactGroups>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<ContactsContactGroups> ContactsContactGroups { get; set; }
    }
}
