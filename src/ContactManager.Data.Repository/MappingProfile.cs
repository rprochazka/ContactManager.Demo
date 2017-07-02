using System.Linq;
using AutoMapper;
using ContactManager.Data.EfCore.Models;
using ContactManager.Entities.Models;

namespace ContactManager.Data.Repository
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ContactModel, Contact>()
                .ForMember(x => x.ContactsContactGroups, y => y.MapFrom(z => z.Groups.Select(i=> new ContactsContactGroups
                {
                    ContactGroupId = i,
                    ContactId = z.Id
                }) ));

            CreateMap<Contact, ContactModel>()
                .ForMember(x => x.Groups, y => y.MapFrom(z => z.ContactsContactGroups.Select(i => i.ContactGroupId)));

            CreateMap<ContactGroupModel, ContactGroup>();
            CreateMap<ContactGroup, ContactGroupModel>();
        }
    }
}
