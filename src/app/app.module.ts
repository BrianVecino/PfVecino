import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './modules/material/material.module';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { ReactiveModule } from './user/reactive/reactive.module';
import { LoginComponent } from './auth/login/login.component';
import { LoginModule } from './auth/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UserComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveModule,
    LoginModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
