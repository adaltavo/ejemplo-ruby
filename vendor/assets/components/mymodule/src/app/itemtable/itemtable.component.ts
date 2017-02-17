import { Component, OnInit, Input } from '@angular/core';
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
  //@Input() user;
  //@Input() item;
  constructor(private invoiceService: InvoiceService, private itemService: ItemService) { 

  }

  ngOnInit() {
    this.rows=[];
  	//this.rows=[{item:{id:0, name:""},quantity:1,unitprice:0, subtotal:0}];
    this.invoice={user_id:0,date:Date.now(),number:"avc123", amount:1234};
  }

  addRow(){
  	this.rows.push({item:{id:0, name:""},quantity:1,unitprice:0, subtotal:0});
  }
  removeRow(){
  	if(this.rows.length!==0){
  		this.rows.pop();
  	}
  }

  removeRowAt(index){
    this.rows.splice(index,1);
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
        this.rows[index].item.id=msg.id;
        this.rows[index].item.name=msg.name;
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

  public setNewUser(user){
    this.invoice.user_id=user;
  }
  public setNewItem(item){
    this.itemService.getItem(item).subscribe(
      (msg)=>{
        //let subtotal=Number();
        this.rows.push({item:{id:msg.id, name:msg.name},quantity:1,unitprice:msg.saleprice, subtotal:msg.saleprice});
      },
      (err)=>{
         console.log(err);
      }
    );
  }

}
