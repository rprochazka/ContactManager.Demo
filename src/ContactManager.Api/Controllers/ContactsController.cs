using System;
using System.Collections.Generic;
using AutoMapper;
using ContactManager.Api.Filters;
using Microsoft.AspNetCore.Mvc;
using ContactManager.Api.Models;
using ContactManager.Entities.Models;
using ContactManager.Services;

namespace ContactManager.Api.Controllers
{
    [Route("api/contacts")]
    [ValidateModel]
    public class ContactsController : Controller
    {
        private readonly IContactService contactService;
        private readonly IMapper mapper;

        public ContactsController(IContactService contactService, IMapper mapper)
        {
            this.contactService = contactService ?? throw new ArgumentNullException(nameof(contactService));
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [Route("")]
        [HttpGet]
        public IActionResult GetContacts()
        {
            var result = contactService.GetContacts();            
            return Ok(mapper.Map<IEnumerable<ContactModel>, IEnumerable<ContactBriefViewModel>>(result));
        }

        [Route("{id}", Name = "GetContact")]
        [HttpGet]
        public IActionResult GetContact(int id)
        {
            var result = contactService.GetContact(id);
            return Ok(mapper.Map<ContactModel, ContactDetailViewModel>(result));
        }

        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateContact(int id, [FromBody]ContactEditViewModel contact)
        {            
            var model = mapper.Map<ContactEditViewModel, ContactModel>(contact);
            model.Id = id;
            var result = contactService.SaveContact(model);
            return Ok(mapper.Map<ContactModel, ContactDetailViewModel>(result));
        }

        [Route("")]
        [HttpPost]
        public IActionResult CreateContact([FromBody]ContactEditViewModel contact)
        {            
            var model = mapper.Map<ContactEditViewModel, ContactModel>(contact);            
            var result = contactService.SaveContact(model);
            return CreatedAtAction("GetContact", new {id = result.Id}, mapper.Map<ContactModel, ContactDetailViewModel>(result));
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteContact(int id)
        {
            contactService.DeleteContact(id);
            return NoContent();
        }

        [Route("contactgroups")]
        [HttpGet]
        public IActionResult GetContactGroups()
        {
            return Ok(mapper.Map<IEnumerable<ContactGroupModel>, IEnumerable<ContactGroupViewModel>>(contactService.GetContactGroups()));
        }

    }    
}
