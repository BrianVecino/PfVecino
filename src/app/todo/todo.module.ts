import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';
import { CounterModule } from './counter/counter.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    CounterModule
  ]
})
export class TodoModule { }
