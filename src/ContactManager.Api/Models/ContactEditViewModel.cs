using System.Collections.Generic;
using FluentValidation;

namespace ContactManager.Api.Models
{
    public class ContactEditViewModel
    {        
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public List<int> Groups { get; set; }
    }

    public class ContactEditViewModelValidator : AbstractValidator<ContactEditViewModel>
    {
        public ContactEditViewModelValidator()
        {
            RuleFor(x => x.FirstName).MaximumLength(50);
            RuleFor(x => x.LastName).NotEmpty().MaximumLength(100);
            RuleFor(x => x.Street).MaximumLength(100);
            RuleFor(x => x.City).NotEmpty().MaximumLength(100);
            RuleFor(x => x.ZipCode).MaximumLength(50);
            RuleFor(x => x.Email).NotEmpty().EmailAddress();
            RuleFor(x => x.PhoneNumber).Matches(@"^\d{9}$");
        }
    }
}