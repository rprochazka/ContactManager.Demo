import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactFormComponent} from './contact-form/contact-form.component'
import {ContactListComponent} from './contact-list/contact-list.component'

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent, pathMatch: 'full' },
  { path: 'contacts/new', component: ContactFormComponent},
  { path: 'contacts/:id', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
