import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class formuserService {
	private url = '/user/create';  // URL to web API

	constructor(private http: Http) { }
	sendUserData(datos) {
		//set headers 
		//recibe los datos del form y los convierte en json
		let body = JSON.stringify(datos);
		//cambia el content type por json (enviara un json)
		let headers = new Headers({ 'Content-Type': 'application/json' });
		//no se que hace esta linea pero hace un json del header y lo guara en esta variable
		let options = new RequestOptions({ headers: headers });
		//llenamos todos los parametros de la funcion para enviar el post
		return this.http.post(this.url, body, options)
			.map(res => res.json());
	}
}