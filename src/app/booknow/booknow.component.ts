import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-booknow',
  imports:[FormsModule, ReactiveFormsModule, NgIf,CommonModule],
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
  minDate: string = '';
  minEndDate: string = '';
  pricePerNight: number = 1000;
  totalPrice: number = 0;
  totalNights: number = Math.floor(Math.random() * 10);
  discount: number = 0;
  finalPrice: number = this.pricePerNight * this.totalNights - this.discount;
  priceView: boolean = false;
  available: boolean = false;

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
    // Check if both start and end dates are present and that the end date is after the start date
    if (this.endDate && this.startDate && new Date(this.endDate) <= new Date(this.startDate)) {
        alert('End date should be after the start date.');
        this.endDate = ''; // Reset the end date
    } else {
        // Calculate the number of nights between the start and end date
        const startDateObj = new Date(this.startDate);
        const endDateObj = new Date(this.endDate);
        const timeDifference = endDateObj.getTime() - startDateObj.getTime();

        this.totalNights = Math.floor(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days

        if (this.totalNights <= 0) {
            alert('End date must be later than the start date.');
        } else {
            console.log('Dates variation: ' + this.totalNights + ' nights');
            // Apply pricing logic
            this.discount = 0; // Assuming no discount logic at this point
          this.finalPrice = this.pricePerNight * this.totalNights - this.discount;
          this.priceView = true;
        }
    }
}

  onSubmit(): void {
    alert('Form submitted!');
    this.submitted = true;
  }


  checkStartDates() {
    this.minEndDate = this.startDate;
  }

  ngOnInit() {
    //alert('Component initialized!');
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  // this.totalNights = Math.floor(Math.random() * 10);
  // this.discount = 0;
  // this.finalPrice = this.pricePerNight * this.totalNights - this.discount;

  }


  // check availability
  checkAvailability() {
    this.available = true;
}
}
