import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {User} from './user.model';
//import {Log} from './log.model';
import {Observable} from 'rxjs';
import 'rxjs/Rx'; // you can cut it down to include only the nescessary parts like .map etc
import {ToastsManager} from 'ng2-toastr';
import {ErrorService} from '../components/errorHandler/error.service';
//import {Reset} from './resetPassword';
import { Router } from '@angular/router';


@Injectable()

export class AuthService {
app : User[]=[];
  constructor(private http: Http, private errorService: ErrorService, private toastr: ToastsManager,private _router: Router,) {
  }



  // sending request to back end to register our user
  signup(user: User) {
    console.log(user);
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
   
      return this.http.post('http://localhost:3000' + '/user/register', user).map(res => res.json());
  }

  signin(user: User) {
    /*const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    console.log(user);
      return this.http.post('http://localhost:3000' + '/user/login', user).map(res => res.json());*/
      const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/user/login', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }
  

  // logout function to be used in html file of both pages (login/register) in order to clear the localStorage from token and user id.
  logout() {
    localStorage.clear();
    this._router.navigate(['/']);
    //this.toastr.info('You have been logged out');
  }

  // check if the user is logged in or not in html files for both pages (login/register)
  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}
