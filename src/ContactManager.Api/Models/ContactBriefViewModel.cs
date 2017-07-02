using System.Collections.Generic;

namespace ContactManager.Api.Models
{
    public class ContactBriefViewModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }        
        public string City { get; set; }        
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public List<int> Groups { get; set; }
    }
}