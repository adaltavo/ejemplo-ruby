import { Component } from '@angular/core';
import { ItemService } from './app.item.service';



interface Item {
	id: number;
	name: string;
	sku: string;
	purchprice: number;
	saleprice: number;
	shortdes: string;
	longdes: string;
	stock: number;
}




@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [ItemService]
})
export class AppComponent {
	title = 'app works!';
	items: Item[] = [
	{id:1,name:"cargando items",sku:"2",purchprice:3,saleprice:3,shortdes:"sws",longdes:"2w2w",stock:32},
		];
	errorMessage;
/*
	constructor(private itemService: ItemService){
		this.itemService.getItems().subscribe( 
			(items) =>{this.items = items; console.log(this.items);} ,
			error =>  this.errorMessage = <any>error);
		console.log(this.items);
	}
*/


}
