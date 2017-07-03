import { ContactsService } from './../shared/contacts.service';
import { ContactModel } from './../shared/contact-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  contact: ContactModel = new ContactModel();
  contactId?: number

  constructor(
    formBuilder: FormBuilder,
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
        // BasicValidators.email
        // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      phoneNumber: [''],
      street: [''],
      city: ['', Validators.maxLength(30)],
      zipcode: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.contactId = id;

      this.title = id ? 'Edit contact' : 'New contact';

      if (!id) {
        return;
      }

      this.contactService.getContact(id)
        .subscribe(
          contact => this.contact = contact,
          response => {
            if (response.status === 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    let result;
    const contactValue = this.form.value;

    if (this.contactId) {
      result = this.contactService.updateContact(this.contactId, contactValue);
    } else {
      result = this.contactService.addContact(contactValue);
    }

    result.subscribe(data => this.router.navigate(['contacts']));
  }

}
