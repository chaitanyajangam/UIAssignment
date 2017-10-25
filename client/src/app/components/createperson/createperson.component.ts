import { Component, OnInit, EventEmitter, ViewChild, ElementRef, AfterViewInit, Renderer } from '@angular/core';
//import {PersonService} from '../../auth/person.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { PersonService } from '../../auth/person.service';
@Component({
  selector: 'app-createperson',
  templateUrl: './createperson.component.html',
  styleUrls: ['./createperson.component.css'],
  providers: []
})
export class CreatepersonComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  constructor(private formBuilder: FormBuilder, private personService: PersonService,private _router: Router) {
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      name1: '',
      gender: '',
      age: '',
      phoneNumber: ''
    })
  }
  onRegisterSubmit() {

    const person = {
      name1: this.form.get('name1').value,
      gender: this.form.get('gender').value,
      age: this.form.get('age').value,
      phoneNumber: this.form.get('phoneNumber').value
    }
    console.log(person)
    this.personService.createPerson(person).subscribe(data => {
      console.log(data);
      //this._router.navigate(['/createperson']);
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        //this.messageClass = 'alert alert-Success';
        //this.message = data.message;
        alert("successfully saved");
        this._router.navigate(['/']);

      }
    });
    // console.log(this.form.name);
    console.log(this.form.get('name1').value);
    //console.log(this.form.get('value2').value);
    //console.log(this.form.get('value3').value);
  }

  ngOnInit() {
  }

}
