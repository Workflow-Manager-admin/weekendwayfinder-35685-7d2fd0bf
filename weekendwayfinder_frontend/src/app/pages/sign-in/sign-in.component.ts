import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  // Removed unused router property to fix lint error

  // PUBLIC_INTERFACE
  signIn(): void {
    // Placeholder validation logic (to be replaced with real auth)
    if (!this.email || !this.password) {
      this.error = 'Please enter both email and password.';
      return;
    }
    // Simulate successful sign-in
    // Navigation will be implemented here in real use
  }
}
