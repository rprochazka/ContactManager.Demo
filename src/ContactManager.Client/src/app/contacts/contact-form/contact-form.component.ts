import { ErrorResponseModel } from './../shared/error-response-model';
import { ContactGroupModel } from './../shared/contact-group-model';
import { ContactGroupSelectionModel } from './../shared/contact-group-selection-model';
import { ContactsService } from './../shared/contacts.service';
import { ContactModel } from './../shared/contact-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { BasicValidators } from '../../common/basic-validators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  contact: ContactModel = new ContactModel();
  contactId?: number;
  contactGroups: ContactGroupSelectionModel[] = new Array<ContactGroupSelectionModel>();
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactsService
  ) {
    this.form = formBuilder.group({
      firstName: [''],
      lastName: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        BasicValidators.email
      ]],
      phoneNumber: ['', [
        BasicValidators.phone
      ]],
      street: [''],
      city: ['', [
        Validators.required,
      ]],
      zipcode: [''],
      groups: this.buildContactGroups()
    });
  }

  get groups(): FormArray {
    return this.form.get('groups') as FormArray;
  }

  buildContactGroups() {
    const arr = this.contactGroups.map(s => {
      return this.formBuilder.control(s.selected);
    })
    return this.formBuilder.array(arr);
  }

  setContactGroups() {
    const newGroups = this.buildContactGroups();
    const groupsArray: FormArray = this.form.get('groups') as FormArray;
    for (let index = 0; index < newGroups.length; index++) {
      const existingControl = groupsArray.at(index)
      if (existingControl) {
        groupsArray.setControl(index, newGroups.at(index));
      } else {
        groupsArray.insert(index, newGroups.at(index));
      }
    }
  }

  getSelectedGroupIds(formValues) {
    return formValues.groups.map((item, index) => {
      return {
        id: this.contactGroups[index].id,
        selected: item
    }})
    .filter(item => item.selected)
    .map(item => item.id);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.contactId = id;

      this.title = id ? 'Edit contact' : 'New contact';

      this.isLoading = true;
      Observable.forkJoin(
        this.contactService.getContactGroups(),
        this.contactService.getContact(id)
        )
        .subscribe((resp) => {

          const contactGroups = resp[0];
          const contact = resp[1];

          if (id && !contact) {
            this.router.navigate(['NotFound']);
          }

          if (contact) {
            this.contact = contact;
          }

          this.contactGroups = contactGroups.map(group => {
            return {
              id: group.id,
              name: group.name,
              selected: contact && contact.groups.indexOf(group.id) > -1 || false
            }
          });
          this.setContactGroups();
        },
        error => alert('Unabwle to load contact'),
        () => this.isLoading = false);

    });
  }

  save() {
    let result;
    const contactValue = this.form.value;
    contactValue.groups = this.getSelectedGroupIds(contactValue);

    this.isLoading = true;
    if (this.contactId) {
      result = this.contactService.updateContact(this.contactId, contactValue);
    } else {
      result = this.contactService.addContact(contactValue);
    }

    result.subscribe(
      data => this.router.navigate(['contacts']),
      error => alert(this.formatErrorResponse(error)),
      () => this.isLoading = false
    );
  }

  formatErrorResponse(errorResponse: ErrorResponseModel) {
    let formatedText: string = errorResponse.message;
    if (errorResponse.errors) {
      errorResponse.errors.forEach(error => {
        formatedText += `\r\n - ${error.field}: ${error.message}`;
      });
    }

    return formatedText;
  }

}
