import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {NavbarComponent} from './components/navbar/navbar.component';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';




const appRoutes: Routes = [
 // { path: '', component: AppComponent },
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, /* User must be logged in to view this route*/},
  {path: 'register', component: RegisterComponent, /* User must be logged in to view this route*/},
  {path: 'profile', component: ProfileComponent, /* User must be logged in to view this route*/},

 
  //{ path: '**', component: CreatepersonComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
      appRoutes) ],
  providers: [],
  bootstrap: [],
  exports:[RouterModule]
})
export class RoutesModule { }