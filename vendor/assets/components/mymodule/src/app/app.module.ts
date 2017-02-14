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
import { AlertModule } from 'ng2-bootstrap';

import { MyrouterModule } from './myrouter/myrouter.module';
import { ItemtableComponent } from './itemtable/itemtable.component';
import { SellComponent } from './sell/sell.component';
import { Select2userComponent } from './select2user/select2user.component';
import { Select2Module } from 'ng2-select2';
import { Select2itemComponent } from './select2item/select2item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FormuserComponent,
    UploadexcelComponent,
    SidenavComponent,
    HomeComponent,
    ItemtableComponent,
    SellComponent,
    Select2userComponent,
    Select2itemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyrouterModule,
    AlertModule.forRoot(),
    MaterialModule.forRoot(),
    Select2Module
  ],
  providers: [],
  bootstrap: [SidenavComponent]
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
