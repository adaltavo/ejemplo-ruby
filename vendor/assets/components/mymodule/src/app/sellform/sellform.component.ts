import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sellform',
  templateUrl: './sellform.component.html',
  styleUrls: ['./sellform.component.css']
})
export class SellformComponent implements OnInit {
	@Output() newItem= new EventEmitter();
	@Output() newUser= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public eventItemHandler(item){
  	this.newItem.emit(item);
  }
   public eventUserHandler(user){
  	this.newUser.emit(user);
  }

}
