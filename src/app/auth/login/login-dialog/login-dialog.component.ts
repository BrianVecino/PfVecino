import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {
   
  loginForm: FormGroup;

  constructor (private formBuildes: FormBuilder, private matDialogRef: MatDialogRef <LoginDialogComponent>) {
    this.loginForm = this.formBuildes.group ({
      email: ['iba@hory', [Validators.required,Validators.email]],
      password : ['',[Validators.required]],
    })
  }
  
 
 login(): void {
  if (this.loginForm.invalid){
    this.loginForm.markAllAsTouched
  }
  else{
    alert ("Usuario registrado")
    this.matDialogRef.close(this.loginForm.value)
  }
 }
}
