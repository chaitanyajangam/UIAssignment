import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutesModule} from './routes.component';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import {ErrorService} from './components/errorHandler/error.service';
import {ErrorComponent} from './components/errorHandler/error.component';
import { HomeComponent } from './components/home/home.component';


import { ToastModule, ToastOptions } from 'ng2-toastr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

/*import { FlashMessagesModule } from 'angular2-flash-messages';*/

import { AuthService } from './auth/auth.service';

let options = <ToastOptions>{
  animate: 'flyRight',
  positionClass: 'toast-top-right',
};
@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
   
    ErrorComponent,
   
    HomeComponent,
   
    
   
    LoginComponent,
   
    RegisterComponent,
   
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule.forRoot()
    /*FlashMessagesModule.forRoot(),*/
  ],
  providers: [ ErrorService, AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
