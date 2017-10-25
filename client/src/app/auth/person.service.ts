import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import'rxjs/add/operator/map';
import {Person} from './person.model';


@Injectable()
export class PersonService {

domain = "http://localhost:3000"

    constructor(
        private http: Http
    ){}

    createPerson(person : Person){
        let headers = new Headers({'Content-Type': 'application/json'});
        const body = JSON.stringify(person);
        console.log(person);
        console.log(body);
        return this.http.post(this.domain +'/person/createperson', body, {headers: headers}).map(res => res.json());
    }
}
