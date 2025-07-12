import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(email, password) {
    const headers = new HttpHeaders({ Athorization: 'Basic ' + btoa(email + ':' + password) });
    return this.http.get<User>("http://localhost:8080/login", { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('email', email);
          let authString = 'Basic ' + btoa(email + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }

      ));
  }

  isUserLoggerIn() {
    let user = sessionStorage.getItem('email');
    console.log(!(user === null));

    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('email')
  }

}
