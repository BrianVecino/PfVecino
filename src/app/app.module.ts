import { NgModule, isDevMode } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { ApiComponentModule } from './user/api-component/api-component.module';
import { StoreModule } from '@ngrx/store';
import { CounterModule } from './todo/counter/counter.module';
import { rootReducer } from './todo/counter/state/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
    LoginModule,
    HttpClientModule,
    ApiComponentModule,
    StoreModule.forRoot(rootReducer, {}),
    CounterModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
