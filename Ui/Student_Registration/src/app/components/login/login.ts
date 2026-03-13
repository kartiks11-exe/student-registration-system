import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html'
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl('admin@admin.com', [Validators.required, Validators.email]),
    password: new FormControl('admin', [Validators.required])
  });

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      // Simple hardcoded login for demo
      const val = this.loginForm.value;
      if (val.email === 'admin@admin.com' && val.password === 'admin') {
        this.router.navigate(['/home']);
      } else {
        alert('Invalid credentials! Use admin@admin.com / admin');
      }
    }
  }
}
