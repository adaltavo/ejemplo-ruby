import { Component, OnInit } from '@angular/core';
import { formuserService } from './app.formuser.service'


@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.css'],
  providers: [formuserService]
})

export class FormuserComponent {
  getData:String;
  	constructor(private _formuserService:formuserService){
	}
  onSubmit(value: any){
    //console.log(value);
    this._formuserService.sendUserData()
    .subscribe(
      data => this.getData=JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    );
  }

}
