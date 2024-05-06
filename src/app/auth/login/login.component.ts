import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginRequest } from '../../interface/loginRequest';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  displayedColumns: string[] = ['email', 'password'];
  login: LoginRequest [] = [
    {
           email: 'hola@hola.com',
           password:'s',
    }
  ]
  
  constructor (private matDialog: MatDialog) {}

  openLogin(): void {
    this.matDialog.open(LoginDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.login = [...this.login, result]
        }
      }
    })
  }
}
