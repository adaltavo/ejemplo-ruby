import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class uploadexcelService{
	private url = 'http://localhost:3000/item/create';  // URL to web API

	constructor (private http: Http) {}
	sendUserData () {
		return this.http.get(this.url).map(res => res.json());
	}

}

