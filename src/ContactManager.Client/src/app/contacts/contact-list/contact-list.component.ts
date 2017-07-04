import { ContactGroupModel } from './../shared/contact-group-model';
import { ContactModel } from './../shared/contact-model';
import { ContactsService } from './../shared/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts: ContactModel[] = [];
  private contactGroups: ContactGroupModel[] = [];

  constructor(private contactService: ContactsService, private router: Router) { }

  private loadData() {

    Observable.forkJoin(
        this.contactService.getContactGroups(),
        this.contactService.getContacts()
        ).subscribe(resp => {
          this.contactGroups = resp[0];
          this.contacts = resp[1];
        });
  }

  ngOnInit() {
    this.loadData()
  }

  translateGroupIds(ids: number[]): string[] {
    const result: string[] = [];
    ids.sort().forEach(id => {
      result.push(this.contactGroups.find(i => i.id === id).name);
    });

    return result;
  }

  deleteContact(event: Event, contact: ContactModel) {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete ' + contact.lastName + '?')) {
      this.contactService.deleteContact(contact.id)
        .subscribe(() => window.location.reload(),
          err => {
            alert('Could not delete contact.');
          });
    }
  }

}
