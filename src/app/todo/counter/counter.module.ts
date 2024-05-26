import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './counter.component';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports : [CounterComponent]
})
export class CounterModule { }
