import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreatepersonComponent } from './components/createperson/createperson.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PersontableComponent} from './components/persontable/persontable.component';
import {HomeComponent} from './components/home/home.component';
import {EditpersonComponent} from './components/editperson/editperson.component';

const appRoutes: Routes = [
 // { path: '', component: AppComponent },
  {path: '', component: HomeComponent},
  {path: 'createperson', component: CreatepersonComponent},
  {path: 'editperson', component: EditpersonComponent},
  {path: 'persontable', component: PersontableComponent},
 
  { path: '**', component: CreatepersonComponent }
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