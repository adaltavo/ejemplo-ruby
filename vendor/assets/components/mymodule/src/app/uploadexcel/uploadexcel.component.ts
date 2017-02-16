import { Component, OnInit,ViewChild } from '@angular/core';
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

   @ViewChild("fileInput") fileInput;


    onSubmit():void{
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];
        this._uploadexcelservice
            .upload(fileToUpload)
            .subscribe(res => {
                console.log(res);
            });
    }
    console.log("entro");
  }

}
