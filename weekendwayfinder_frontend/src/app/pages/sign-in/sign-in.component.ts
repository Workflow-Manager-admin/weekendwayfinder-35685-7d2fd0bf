import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Sign-In Component provides a secure email/password login form with real-time validation,
 * user feedback messages, and navigation to the Home page on successful sign-in.
 * The logic is modular and ready for integration with a backend auth system in the future.
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

  // Note: No property assignment for router

  constructor(router: Router) {}

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
    if (field === 'email') {
      if (!this.email && this.touched.email) return 'Email is required.';
      // PUBLIC_INTERFACE
      // Simple email regex just for demo, NOT for real prod use!
      const emailRegex = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
      if (this.email && !emailRegex.test(this.email)) return 'Enter a valid email.';
    } else if (field === 'password') {
      if (!this.password && this.touched.password) return 'Password is required.';
      // Demo: show warning for short password
      if (this.password && this.password.length < 4) return 'Password too short.';
    }
    return '';
  }

  /**
   * Checks if the current form is valid.
   * @returns true if valid, false otherwise
   */
  isFormValid(): boolean {
    return (
      !!this.email &&
      !!this.password &&
      this.getFieldError('email') === '' &&
      this.getFieldError('password') === ''
    );
  }

  /**
   * Handles the sign-in submission. If valid, "logs in" and navigates to Home.
   * Shows validation feedback in real-time.
   */
  // PUBLIC_INTERFACE
  signIn(): void {
    this.touched.email = true;
    this.touched.password = true;
    this.error = '';
    if (!this.isFormValid()) {
      this.error = 'Please fix the highlighted errors.';
      return;
    }
    this.submitting = true;
    // Simulate a network/auth delay - prod: call auth API here!
    window.setTimeout(() => {
      this.submitting = false;
      // Using window.location for navigation to /home to match the Router call.
      window.location.href = '/home';
    }, 650);
  }
}
