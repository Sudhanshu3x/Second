import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DetailsComponent } from './details/details.component'
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DetailsComponent,
    LoginsuccessComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
