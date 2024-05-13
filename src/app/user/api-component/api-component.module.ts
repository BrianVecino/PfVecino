import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiComponentComponent } from './api-component.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ApiComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [ApiComponentComponent]
})
export class ApiComponentModule { }
