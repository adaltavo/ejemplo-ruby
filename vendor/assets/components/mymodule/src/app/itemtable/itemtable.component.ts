import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemtable',
  templateUrl: './itemtable.component.html',
  styleUrls: ['./itemtable.component.css']
})
export class ItemtableComponent implements OnInit {

	private rows;
  constructor() { }

  ngOnInit() {
  	this.rows=Array(1);
  }

  addRow(){
  	this.rows.push("");
  }
  removeRow(){
  	if(this.rows.length!==1){
  		this.rows.pop();
  	}
  }

}
