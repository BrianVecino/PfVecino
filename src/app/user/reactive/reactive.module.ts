import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactive.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [ReactiveComponent]
})
export class ReactiveModule { }
