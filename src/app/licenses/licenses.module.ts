import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { IndexComponent } from './index/index.component';
import { LicensesRoutingModule } from './licenses-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    LicensesRoutingModule,
    FormsModule
  ],
  exports:[
    IndexComponent
  ]
})
export class LicensesModule { }
