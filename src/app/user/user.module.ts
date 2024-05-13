import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports : [  MatFormFieldModule,
    MatInputModule]
})
export class UserModule { }
