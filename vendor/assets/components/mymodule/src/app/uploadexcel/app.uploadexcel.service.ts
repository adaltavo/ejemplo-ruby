import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class uploadexcelService {
	private url = 'item/cargaexcel';  // URL to web API
	constructor(private http: Http) { }
	upload(fileToUpload: any) {
		let input = new FormData();
		input.append("excel", fileToUpload);

		return this.http
			.post(this.url, input);
	}
}