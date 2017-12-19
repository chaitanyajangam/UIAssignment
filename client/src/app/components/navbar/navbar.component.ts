import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
/*import { FlashMessagesService } from 'angular2--messages';*/

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  private authService: AuthService,
   private router: Router,
    /*private flashMessagesService: FlashMessagesService*/
  ) { }
isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  // Function to logout user
 logout() {
    return this.authService.logout();
  }

  ngOnInit() {
  }

}
