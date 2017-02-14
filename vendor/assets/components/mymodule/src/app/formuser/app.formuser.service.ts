import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class formuserService{
	private url = '/user/create';  // URL to web API

	constructor (private http: Http) { }
	sendUserData () {
		var dd=JSON.stringify({name:'dd',password:'ddd',correo:'dd',rfc:'dd'});
		var params='json='+dd;
		var headers=new Headers();
		headers.append('Content-Type','application/x-wwww-form-urlencoded');
		
		return this.http.post(this.url,params,{headers: headers}).map(res => res.json());
	}
private jwt() {
        // create authorization header with jwt token
  
           // let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
           // return new RequestOptions({ headers: headers });
        
    }
}



