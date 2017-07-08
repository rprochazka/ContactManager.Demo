import { ContactGroupModel } from './../shared/contact-group-model';
import { ContactModel } from './../shared/contact-model';
import { ContactsService } from './../shared/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/operator/finally';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  private contacts: ContactModel[] = [];
  private contactGroups: ContactGroupModel[] = [];
  private isLoading = true;

  constructor(
    private contactService: ContactsService,
    private router: Router
  ) {}

  private loadData() {
    this.isLoading = true;
    Observable.forkJoin(
      this.contactService.getContactGroups(),
      this.contactService.getContacts()
    ).subscribe(
      resp => {
        this.contactGroups = resp[0];
        this.contacts = resp[1];
      },
      error => alert('Unable to load contacts'),
      () => (this.isLoading = false)
    );
  }

  ngOnInit() {
    this.loadData();
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
      this.contactService
        .deleteContact(contact.id)
        // .finally(() => this.router.navigate(['contatcs']))
        .subscribe(
          () => this.loadData(),
          err => {
            alert('Could not delete contact.');
          }
        );
    }
  }

  onGroupChange(selectedGroup) {
    this.isLoading = true;
    this.contactService.getContacts(selectedGroup).subscribe(
      contacts => {
        this.contacts = contacts;
      },
      error => alert('Unable to load contacts'),
      () => (this.isLoading = false)
    );
  }
}
