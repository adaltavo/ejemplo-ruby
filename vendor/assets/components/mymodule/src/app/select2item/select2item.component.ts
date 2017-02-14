import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select2item',
  templateUrl: './select2item.component.html',
  styleUrls: ['./select2item.component.css']
})
export class Select2itemComponent implements OnInit {

	private select2options:S2options;
  constructor() { }

  ngOnInit() {
  	this.select2options = {};
  	this.select2options.ajax={
  		url:"/item/ajax",
  		dataType: 'json',
  		data: (term)=>{ return {sku:term} }
  	};
  }

}

interface S2options{
	ajax?:Select2AjaxOptions;
}

interface Select2AjaxOptions {
    transport?: AjaxFunction;
    /**
    * Url to make request to, Can be string or a function returning a string.
    */
    url?: any;
    dataType?: string;
    delay?: number;
    cache?: boolean;
    data?: (term: string, page: number, context: any) => any;
    results?: (term: any, page: number, context: any) => any;
    processResults?:(data: any, params: any) => any;
}