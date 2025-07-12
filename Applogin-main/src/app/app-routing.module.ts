import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CameraComponent } from './camera/camera.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loginsuccess', component: LoginsuccessComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login',component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'contactus', component: ContactusComponent },
  {path: 'camera', component: CameraComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
