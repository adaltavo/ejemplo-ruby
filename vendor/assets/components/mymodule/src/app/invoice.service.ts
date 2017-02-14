import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class InvoiceService {
	private url = 'http://localhost:3000/venta';  // URL to web API

  constructor(private http: Http) { 

  }

  postInvoice(invoice){
  	return this.http.post(this.url,invoice).map(res => res.json());
  }

}
