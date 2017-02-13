import { Component, OnInit } from '@angular/core';
import { formuserService } from './app.formuser.service'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.css']
})


export class FormuserComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  }
  onSubmit(value: any){
    console.log(value);
  }

}
