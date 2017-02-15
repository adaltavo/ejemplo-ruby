import { Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select2item',
  templateUrl: './select2item.component.html',
  styleUrls: ['./select2item.component.css']
})
export class Select2itemComponent implements OnInit {

	private select2options:S2options;
  private selected:string;
  @Output()
  selectedItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  	this.select2options = {};
  	this.select2options.ajax={
  		url:"/item/ajax",
  		dataType: 'json',
  		data: (term)=>{ //console.log(term.term);
        return {sku:term.term}; 
      },
  		delay:1000,
  		processResults: (data)=>{
  			console.log(data);
  			return {
  				results:data.map((item)=>{
  					return {id:item.id, text:item.name};
  				})
  			}
  		}
  	};
    
  }

  public currentItem(e:any){
    this.selected=e.value;
    this.selectedItem.emit(this.selected);
  }

}

interface S2options{
	ajax?:Select2AjaxOptions;
}

interface Select2AjaxOptions {
    transport?: AjaxFunction;
    url?: any;
    dataType?: string;
    delay?: number;
    cache?: boolean;
    data?: (term: any, page: number, context: any) => any;
    results?: (term: any, page: number, context: any) => any;
    processResults?:(data: any, params: any) => any;

}

interface AjaxFunction {
    (settings: JQueryAjaxSettings): JQueryXHR;
    (url: string, settings?: JQueryAjaxSettings): JQueryXHR;
}