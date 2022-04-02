import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { IndexComponent } from './index/index.component';
import { LicensesRoutingModule } from './licenses-routing.module';
import { FormsModule } from '@angular/forms';
import { SimpComponent } from './simp/simp.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    DefaultComponent,
    IndexComponent,
    SimpComponent
  ],
  imports: [
    CommonModule,
    LicensesRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    IndexComponent
  ]
})
export class LicensesModule { }
