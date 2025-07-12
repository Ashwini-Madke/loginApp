import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  id: number;
  user = new User();
  msg = '';

  constructor(private registrationService: RegistrationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  resetPwd() {
    this.registrationService.resetPassword(this.user.email,this.user).subscribe(
      data => {
        
        console.log(" password has been set successfully");
       
        this.msg = " password has been set successfully ";
      },
      error => {
        console.log(" exception occured ")
      }
    );
  }

  gotoLogin() {
    this.router.navigate(['/login'])
  }


}
