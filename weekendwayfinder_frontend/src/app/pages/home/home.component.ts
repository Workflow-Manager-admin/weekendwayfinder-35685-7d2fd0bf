import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // eslint-disable-next-line no-unused-vars
  constructor(public router: Router) {}

  // PUBLIC_INTERFACE
  /**
   * Navigates to the Trip Planner page ('/trip-planner') when called.
   */
  goToTripPlanner(): void {
    this.router.navigate(['/trip-planner']);
  }
}
