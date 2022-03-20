import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { IndexComponent } from './index/index.component';
import { LicensesRoutingModule } from './licenses-routing.module';

@NgModule({
  declarations: [
    DefaultComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    LicensesRoutingModule
  ],
  exports:[
    IndexComponent
  ]
})
export class LicensesModule { }
