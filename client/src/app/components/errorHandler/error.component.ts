import {Component, OnInit} from '@angular/core';
import {ErrorService} from './error.service';
//mport {ToastsManager} from 'ng2-toastr';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {

  error: Error;

  constructor(private errorService: ErrorService) {
  }

  ngOnInit() {

    this.errorService.errorOccured
      .subscribe(
        (error: Error) => {
          this.error = error;
          //this.toastr.error(this.error.message);
        });
  }
}
