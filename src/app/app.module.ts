import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooknowComponent } from './booknow/booknow.component';

@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppComponent,
      BooknowComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
