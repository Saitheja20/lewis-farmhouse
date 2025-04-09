import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooknowComponent } from './booknow/booknow.component';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppComponent,
  FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
