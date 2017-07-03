import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsService } from './shared/contacts.service';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ContactListComponent, ContactFormComponent],
  providers: [ContactsService]
})
export class ContactsModule { }
