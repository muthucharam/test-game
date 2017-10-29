import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';


 @Injectable()
export class AppService {

  constructor(private http: Http) { }

  
  getAPIData(url) {
   
    let headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/json','token':localStorage.getItem('token') }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    this.debugConsole(options);
    return this.http.get(url,options)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


  }

  // Post Data
  postAPIData(token,url, body: Object): Observable<any> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/json','token':localStorage.getItem('token') }); // ... Set content type to JSON
    
    let options = new RequestOptions({ headers: headers }); // Create a request option
    this.debugConsole(options);
    return this.http.post(url, body, options) // ...using post request
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  debugConsole(data){
    
  }



}