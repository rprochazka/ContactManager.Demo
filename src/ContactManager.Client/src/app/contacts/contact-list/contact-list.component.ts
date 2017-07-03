import { ContactsService } from './../shared/contacts.service';
import { IContactBriefResult } from './../shared/icontact-brief-result';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts: IContactBriefResult[] = [];

  constructor(private contactService: ContactsService, private router: Router) { }

  private loadData() {
    this.contactService.getContacts()
      .subscribe(data => this.contacts = data);
  }

  ngOnInit() {
    this.loadData()
  }

  deleteContact(event: Event, contact: IContactBriefResult) {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete ' + contact.lastName + '?')) {
      this.contactService.deleteContact(contact.id)
        // .flatMap(() => this.contactService.getContacts())
        .subscribe(() => window.location.reload(),
          err => {
            alert('Could not delete contact.');
          });
    }
  }

}
