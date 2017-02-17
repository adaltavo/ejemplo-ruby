import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service'; 
import { ItemService } from '../app.item.service'


@Component({
  selector: 'app-itemtable',
  templateUrl: './itemtable.component.html',
  styleUrls: ['./itemtable.component.css'],
  providers: [InvoiceService, ItemService]
})
export class ItemtableComponent implements OnInit {

  submitted = false;
	private rows;
  private invoice;
  constructor(private invoiceService: InvoiceService, private itemService: ItemService) { 

  }

  ngOnInit() {
  	this.rows=[{item:"",quantity:1,unitprice:0, subtotal:0}];
    this.invoice={user_id:0,date:Date.now(),number:"avc123", amount:1234};
  }

  addRow(){
  	this.rows.push({item:"",quantity:1,unitprice:0, subtotal:0});
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

  public itemEventHandler(item,index){
    console.log(item);
    console.log(index);
    this.itemService.getItem(item).subscribe(
      (msg)=>{
        this.rows[index].item=msg.id;
        this.rows[index].unitprice=msg.saleprice;
        this.setPrice(item,index);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  public setPrice(price, index){
    this.rows[index].subtotal=Number(this.rows[index].unitprice)*Number(this.rows[index].quantity);
  }

  onSubmit(){
    this.submitted = true;
    this.invoice.detail=this.rows;
    console.log(this.invoice);
    this.postInvoice();
  }

}
