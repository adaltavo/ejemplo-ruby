import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service'; 

@Component({
  selector: 'app-itemtable',
  templateUrl: './itemtable.component.html',
  styleUrls: ['./itemtable.component.css'],
  providers: [InvoiceService]
})
export class ItemtableComponent implements OnInit {

  submitted = false;
	private rows;
  private invoice;
  constructor(private invoiceService: InvoiceService) { 

  }

  ngOnInit() {
  	this.rows=[{item:"",quantity:0,unitprice:0}];
    this.invoice={user_id:0,date:Date.now(),number:"avc123", amount:1234};
  }

  addRow(){
  	this.rows.push({item:"",quantity:0,unitprice:0});
  }
  removeRow(){
  	if(this.rows.length!==1){
  		this.rows.pop();
  	}
  }

  postInvoice(){
    this.invoiceService.postInvoice(this.invoice).subscribe(
      (msg) =>{console.log(msg); } ,
      error => console.log(error)

      );

  }

  onSubmit(){
    this.submitted = true;
    this.invoice.detail=this.rows;
    console.log(this.invoice);
    this.postInvoice();
  }

}
