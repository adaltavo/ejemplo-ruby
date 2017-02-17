import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-select2user',
	templateUrl: './select2user.component.html',
	styleUrls: ['./select2user.component.css']
})
export class Select2userComponent implements OnInit {

	private select2options:S2options;
	selected: string;
	@Output() selectedUser=new EventEmitter();
	constructor() { }

	ngOnInit() {
		this.select2options = {};
		this.select2options.ajax={
			url:"/user/ajax",
			dataType: 'json',
			data: (term)=>{ //console.log(term.term);
				return {user:term.term}; 
			},
			delay:1000,
			processResults: (data)=>{
				console.log(data);
				return {
					results:data.map((user)=>{
						return {id:user.id, text:user.name};
					})
				}
			}
		};

	}

	public currentUser(user: any){
		this.selected=user;
		this.selectedUser.emit(user);
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
