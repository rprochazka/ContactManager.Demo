import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ContactsModule} from './contacts/contacts.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {appRouting} from './app.routing'
import {ContactsRoutingModule} from './contacts/contacts-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    ContactsModule,
    ContactsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
