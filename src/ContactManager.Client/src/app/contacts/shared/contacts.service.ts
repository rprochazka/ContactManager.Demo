import { ContactGroupModel } from './contact-group-model';
import { HttpJsonClient } from './../../common/http-json-client';
import { ContactModel } from './contact-model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';

@Injectable()
export class ContactsService {

  private serviceUrl = 'http://localhost:5000/api/contacts';

  constructor(private http: HttpJsonClient) { }

  private extractData<T>(res: Response): T {
    const body = res.json();
    return (<T>body || null);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getContacts() {
    return this.http
      .get(this.serviceUrl)
      .map((resp) => this.extractData<ContactModel[]>(resp))
      .catch(this.handleError);
  }

  getContact(id: number) {
    if (!id) {
      return Observable.of(null);
    }
    return this.http
      .get(`${this.serviceUrl}/${id}`)
      .map((resp) => this.extractData<ContactModel>(resp))
      .catch(this.handleError);
  }

  addContact(contact: ContactModel) {
    return this.http
      .post(this.serviceUrl, contact)
      .map((resp) => this.extractData<ContactModel>(resp))
      .catch(this.handleError);
  }

  updateContact(id: number, contact: ContactModel) {
    return this.http
      .put(`${this.serviceUrl}/${id}`, contact)
      .map((resp) => this.extractData<ContactModel>(resp))
      .catch(this.handleError);
  }

  deleteContact(id: number) {
    return this.http
      .delete(`${this.serviceUrl}/${id}`)
      .map((resp) => Observable.empty<Response>())
      .catch(this.handleError);
  }

  getContactGroups() {
    return this.http
      .get(this.serviceUrl + '/contactgroups')
      .map((resp) => this.extractData<ContactGroupModel[]>(resp))
      .catch(this.handleError);
  }
}
