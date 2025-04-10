import { Component,  inject, OnInit  } from '@angular/core';
 import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule, FormsModule} from '@angular/forms';
  import { AuthService } from '../../services/auth.service'; // Adjust path if needed
 import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule, // ✅ Required for FormBuilder, FormGroup, etc.
    CommonModule, // CommonModule is needed for *ngIf, *ngFor, etc.
    RouterModule,
    FormsModule // Add if needed
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // ✅ styleUrls should be plural
})
export class RegisterComponent {
  registerForm!: FormGroup;
 // public authService: any;

  // Inject services without constructor
  // private fb = inject(FormBuilder);
   //private authService = inject(AuthService);
  // private router = inject(Router);

  // constructor(

  //   private authService: AuthService,
  //  ) {

  // }
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,

    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
}

  ngOnInit() {
    //   this.registerForm = this.fb.group({
    //  username: ['', Validators.required],
    //    email: ['', [Validators.required, Validators.email]],
    //    password: ['', Validators.required]
    //  });

    //  if (this.registerForm.valid) {
    //   this.authService.register(this.registerForm.value).subscribe({
    //     next: () => this.router.navigate(['/login']),
    //     error: (err) => console.error(err)
    //   });
    //  }
     //  this.authService = inject(AuthService);
  }


  onRegister() {
    alert('Registration successful!'+JSON.stringify(this.registerForm.value));
     if (this.registerForm.valid) {
      // const formData = this.registerForm.value;
      // const apiUrl = 'http://localhost/Api/register.php';

      // this.http.post(apiUrl, formData).subscribe({
      //   next: () => this.router.navigate(['/login']),
      //   error: (err) => console.error('Registration error:', err)
       // });
         //  if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: () => this.router.navigate(['/login']),
        error: (err:any) => console.error(err)
      });
    //  }
    }
  }
}
