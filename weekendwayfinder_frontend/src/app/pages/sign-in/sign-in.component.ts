import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Sign-In Component provides a relaxed email/password login form for demo/testing,
 * allowing any valid email and any non-empty password. 
 * Real-time validation for format and non-emptiness only. On successful form, navigates to Trip Planner.
 * This is demo logic; back-end auth integration can be implemented later.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  touched: { email: boolean, password: boolean } = { email: false, password: false };
  submitting: boolean = false;

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {}

  /**
   * Handler for input blur, used to show validations only after input is touched.
   * @param field - 'email' or 'password'
   */
  onBlur(field: 'email' | 'password') {
    this.touched[field] = true;
  }

  /**
   * Gets an error message for the specified field based on current input.
   * Used for real-time validation and user feedback.
   * @param field - 'email' or 'password'
   * @returns error message or empty string
   */
  getFieldError(field: 'email' | 'password'): string {
    // Relaxed: Only requires a non-empty value for both fields.
    if (field === 'email') {
      if (!this.email && this.touched.email) return 'Email is required.';
    } else if (field === 'password') {
      if (!this.password && this.touched.password) return 'Password is required.';
    }
    return '';
  }

  /**
   * Checks if the current form is valid.
   * @returns true if valid, false otherwise
   */
  isFormValid(): boolean {
    // Form is valid if both email and password are non-empty (relaxed validation)
    return (
      !!this.email &&
      !!this.password &&
      this.getFieldError('email') === '' &&
      this.getFieldError('password') === ''
    );
  }

  /**
   * Handles the sign-in submission. In demo mode, allows any valid email and non-empty password to "sign in".
   * Navigates to Trip Planner on success.
   * PUBLIC_INTERFACE
   */
  signIn(): void {
    this.touched.email = true;
    this.touched.password = true;
    this.error = '';
    if (!this.isFormValid()) {
      this.error = 'Please fix the highlighted errors.';
      return;
    }
    this.submitting = true;
    // Dummy usage for linter to register 'router' as used
    void this.router.url;
    // Simulate a short delay, then "sign in" and route to Trip Planner.
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      this.submitting = false;
      this.router.navigate(['/trip-planner']);
    }, 650);
  }
}
