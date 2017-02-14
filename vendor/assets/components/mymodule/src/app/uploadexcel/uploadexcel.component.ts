import { Component, OnInit } from '@angular/core';
import { uploadexcelService } from './app.uploadexcel.service'
@Component({
  selector: 'app-uploadexcel',
  templateUrl: './uploadexcel.component.html',
  styleUrls: ['./uploadexcel.component.css'],
  providers:[uploadexcelService]
})
export class UploadexcelComponent{
getData:String;
  constructor(private _uploadexcelservice:uploadexcelService) {
   }
    onSubmit(){
    //console.log(value);
    /*this._uploadexcelservice.sendUserData(value)
    .subscribe(
      (data) =>{ this.getData=JSON.stringify(data);},
      error => alert(error),
      () => console.log("finished")
    );*/
    console.log("entro");
  }

}
