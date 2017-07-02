using System;
using System.Collections.Generic;

namespace ContactManager.Data.EfCore.Models
{
    public partial class ContactsContactGroups
    {
        public int Id { get; set; }
        public int ContactId { get; set; }
        public int ContactGroupId { get; set; }

        public virtual ContactGroup ContactGroup { get; set; }
        public virtual Contact Contact { get; set; }
    }
}
