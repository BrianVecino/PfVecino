import { Component } from '@angular/core';
import { UserModule } from '../user.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {

  userForm: FormGroup;


  constructor (private formBuilder: FormBuilder, private matDialogRef: MatDialogRef <UserDialogComponent>) {
    this.userForm = this.formBuilder.group ({
      nombre: [''],
      apellido : [''],
      email : ['']
    })
  }
  
  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userForm.value);
    }
  }
}