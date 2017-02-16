import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ToolbarComponent } from '../toolbar/toolbar.component';
import { HomeComponent } from '../home/home.component';
import { FormuserComponent } from '../formuser/formuser.component';
import { UploadexcelComponent } from '../uploadexcel/uploadexcel.component';
import { SellComponent } from '../sell/sell.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes =[
	{path:'index', component: HomeComponent},
	{path:'', redirectTo: 'index', pathMatch: 'full'},
	{path:'item/upload', component: UploadexcelComponent},
	{path:'user/new', component: FormuserComponent},
  {path:'item/sell', component: SellComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class MyrouterModule { }
