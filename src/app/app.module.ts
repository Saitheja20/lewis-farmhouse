import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooknowComponent } from './booknow/booknow.component';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  FormsModule,
    ReactiveFormsModule,
    NgIf,
     RegisterComponent,
    LoginComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
