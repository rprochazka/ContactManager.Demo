import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class HttpJsonClient {

  constructor(private http: Http) {}

  createJsonContentTypeHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
  }

  get(url, params?) {
    const headers = new Headers();
    this.createJsonContentTypeHeader(headers);
    const options = new RequestOptions({ headers: headers });
    if (params) {
      options.params = params;
    }
    return this.http.get(url, options);
  }

  post(url, data) {
    const headers = new Headers();
    this.createJsonContentTypeHeader(headers);
    return this.http.post(url, JSON.stringify(data), {
      headers: headers
    });
  }

  put(url, data) {
    const headers = new Headers();
    this.createJsonContentTypeHeader(headers);
    return this.http.put(url, JSON.stringify(data), {
      headers: headers
    });
  }

  delete(url) {
    const headers = new Headers();
    this.createJsonContentTypeHeader(headers);
    return this.http.delete(url, {
      headers: headers
    });
  }
}
