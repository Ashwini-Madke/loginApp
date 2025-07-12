import { Component } from '@angular/core';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AM';

  currentUser = User;
  constructor(private registrationService: RegistrationService, private router: Router) { }

/**  logout() {
    this.registrationService
    this.router.navigate(['/login']);
  } **/

}
