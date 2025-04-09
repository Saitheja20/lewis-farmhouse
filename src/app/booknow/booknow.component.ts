import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
@Component({
  selector: 'app-booknow',
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './booknow.component.html',
  styleUrl: './booknow.component.css'
})
export class BooknowComponent {

  startDate: string = '';
  endDate: string = '';
  adults: number = 1;
  children: number = 0;
  pets: number = 0;
  submitted: boolean = false;
  minDate: string='';

  // Function to handle increment and decrement
  increment(type: string): void {
     console.log("increment called with type:");
    if (type === 'adults') {
      this.adults++;
    } else if (type === 'children') {
      this.children++;
    } else if (type === 'pets') {
      this.pets++;
    }
  }

  decrement(type: string): void {
    console.log("decrement called with type:");
    if (type === 'adults' && this.adults > 1) {
      this.adults--;
    } else if (type === 'children' && this.children > 0) {
      this.children--;
    } else if (type === 'pets' && this.pets > 0) {
      this.pets--;
    }
  }

  // Function to validate the end date
  checkDates(): void {
    if (this.endDate && this.startDate && new Date(this.endDate) <= new Date(this.startDate)) {
      alert('End date should be after the start date.');
      this.endDate = ''; // Reset the end date
    }
  }

  // Function to handle form submission
  onSubmit(): void {
    this.submitted = true;
  }

ngOnChanges(): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.

}
  checkstartDates(){

console.log("checkstartDates called");

}
  ngOnInit() {
    // Set minimum date to today
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

}
