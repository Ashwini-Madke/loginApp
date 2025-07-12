import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormGroup,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { BasicauthInterceptorService } from './basicauth-interceptor.service';
import { ContactusComponent } from './contactus/contactus.component';
import { CameraComponent } from './camera/camera.component';
import { WebcamModule } from 'ngx-webcam';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    HomeComponent,
    LogoutComponent,
    ProfileComponent,
    ResetpasswordComponent,
    ContactusComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    WebcamModule
  ],
  providers: [
 //   {
 //     provide: HttpInterceptor, useClass: BasicauthInterceptorService, multi=true
 //   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
