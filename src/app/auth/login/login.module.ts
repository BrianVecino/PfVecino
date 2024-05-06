import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
@NgModule({
  declarations: [
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    MatFormFieldModule
  ]
})
export class LoginModule { }
