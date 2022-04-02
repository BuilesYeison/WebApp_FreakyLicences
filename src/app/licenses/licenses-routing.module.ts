import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { SimpComponent } from './simp/simp.component';

const routes:Routes=[
  {
    path:'',
    component: DefaultComponent
  },
  {
    path:'simp',
    component:SimpComponent
  }

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class LicensesRoutingModule { }
