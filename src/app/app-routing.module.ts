import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'loginsuccess',component:LoginsuccessComponent

  },
  {
    path:'registration',component:RegistrationComponent

  },
  {
  path:'login',component:LoginComponent
  },
  {
    path:'success',component:SuccessComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
