import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormuserComponent } from './formuser/formuser.component';
import { AppComponent } from './app.component';


export const router: Routes = [

 // { path: 'user/new',component: FormuserComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);