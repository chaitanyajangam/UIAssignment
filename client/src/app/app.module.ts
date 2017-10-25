import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutesModule} from './routes.component';
import { AppComponent } from './app.component';
import { PersontableComponent } from './components/persontable/persontable.component';
import { CreatepersonComponent } from './components/createperson/createperson.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ErrorService} from './components/errorHandler/error.service';
import {ErrorComponent} from './components/errorHandler/error.component';
import { HomeComponent } from './components/home/home.component';
import { EditpersonComponent } from './components/editperson/editperson.component';
import {PersonService} from './auth/person.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PersontableComponent,
    CreatepersonComponent,
    NavbarComponent,
   
    ErrorComponent,
   
    HomeComponent,
   
    EditpersonComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ErrorService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
