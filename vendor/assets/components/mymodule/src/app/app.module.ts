import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import 'hammerjs';
import { FormuserComponent } from './formuser/formuser.component';
import { UploadexcelComponent } from './uploadexcel/uploadexcel.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule }   from '@angular/router';
import { HomeComponent } from './home/home.component';

import { MyrouterModule } from './myrouter/myrouter.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FormuserComponent,
    UploadexcelComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyrouterModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
