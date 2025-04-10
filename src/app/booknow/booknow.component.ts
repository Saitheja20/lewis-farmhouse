import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms'; // Correct ReactiveForms imports
import { CommonModule } from '@angular/common'; // CommonModule is already good
import { RouterModule } from '@angular/router'; // If you need routing (you might need this later)

@Component({
  selector: 'app-booknow',
  standalone: true,  // If using Standalone Component
  imports: [
    ReactiveFormsModule, // ✅ Required for FormBuilder, FormGroup, etc.
    CommonModule, // CommonModule is needed for *ngIf, *ngFor, etc.
    RouterModule,
    FormsModule// Add if needed
  ],
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent {
  registerForm: FormGroup;
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

  constructor(private fb: FormBuilder) {
    // Reactive form initialization
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

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

  // date validation function
checkDates(): void {
    if (this.endDate && this.startDate && new Date(this.endDate) <= new Date(this.startDate)) {
        alert('End date should be after the start date.');
        this.endDate = '';
    } else {
        const startDateObj = new Date(this.startDate);
      const endDateObj = new Date(this.endDate);

        const timeDifference = endDateObj.getTime() - startDateObj.getTime();

        this.totalNights = Math.floor(timeDifference / (1000 * 3600 * 24));

        if (this.totalNights <= 0) {
            alert('End date must be later than the start date.');
        } else {
            console.log('Dates variation: ' + this.totalNights + ' nights');

            this.discount = 0;
          this.finalPrice = this.pricePerNight * this.totalNights - this.discount;
          this.priceView = true;
        }
    }
}

  onSubmit(): void {
    alert('Form submitted!');
    this.submitted = true;
window.open('https://rzp.io/rzp/0YCgB1n', '_blank');

  const script = document.createElement('script');
  script.src = 'https://rzp.io/rzp/0YCgB1n';
  script.async = true;
  document.body.appendChild(script);  }


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

    onRegister() {
    // if (this.registerForm.valid) {
    //   this.authService.register(this.registerForm.value).subscribe({
    //     next: () => this.router.navigate(['/login']),
    //     error: (err) => console.error(err)
    //   });
    // }
  }
}
