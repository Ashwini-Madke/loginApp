import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


//array in local storage for registered user
let users = JSON.parse(sessionStorage.getItem('users')) || [];

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public loginUserFormRemote(user: User): Observable<any>{
    return this.http.post<any>("http://localhost:8080/login", user);

  }

  public registerFormRemote(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:8080/registration", user);
  }

  public getAllUsers(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/AllUser").pipe(
      map((data: User[]) => {
        return data;
      }), catchError(
        error => {
          return throwError('Something went wrong! ');
        })

      )
   
  }

 

  isLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user===null)
 
}

  public resetPassword(email,user): Observable<User> {
    return this.http.put<User>("http://localhost:8080/updatepassword/{email}", user);
  }


}
