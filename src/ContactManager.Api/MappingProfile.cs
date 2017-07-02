using AutoMapper;
using ContactManager.Api.Models;
using ContactManager.Entities.Models;

namespace ContactManager.Api
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ContactModel, ContactDetailViewModel>();
            CreateMap<ContactModel, ContactEditViewModel>();
            CreateMap<ContactModel, ContactBriefViewModel>();
            CreateMap<ContactGroupModel, ContactGroupViewModel>();

            CreateMap<ContactDetailViewModel, ContactModel>();
            CreateMap<ContactEditViewModel, ContactModel>();
            CreateMap<ContactBriefViewModel, ContactModel>();
            CreateMap<ContactGroupViewModel, ContactGroupModel>();            
        }
    }
}
