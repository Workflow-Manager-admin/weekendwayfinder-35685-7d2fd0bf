import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Trip Planner Component. Displays and validates travel preference form,
 * and routes users to AI Suggestions with their selected data.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-trip-planner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent {
  distance: string = '';
  mood: string = '';
  budget: string = '';
  touched: { distance: boolean, mood: boolean, budget: boolean } = {
    distance: false, mood: false, budget: false
  };
  error: string = '';

  /**
   * Handler for blur events to set validation touch flag.
   */
  onBlur(field: 'distance' | 'mood' | 'budget') {
    this.touched[field] = true;
  }

  /**
   * Returns an error message for the given form field, or empty string if valid.
   */
  getFieldError(field: 'distance' | 'mood' | 'budget'): string {
    if (field === 'distance' && !this.distance && this.touched.distance) {
      return 'Choose a travel distance.';
    }
    if (field === 'mood' && !this.mood && this.touched.mood) {
      return 'Select a mood.';
    }
    if (field === 'budget' && !this.budget && this.touched.budget) {
      return 'Set your budget.';
    }
    return '';
  }

  /**
   * Returns whether the form is valid (all required fields set).
   */
  isFormValid(): boolean {
    return (
      this.distance !== '' && this.mood !== '' && this.budget !== '' &&
      this.getFieldError('distance') === '' &&
      this.getFieldError('mood') === '' &&
      this.getFieldError('budget') === ''
    );
  }

  /**
   * Handles trip planning form submission.
   * Stores selections and (in a real app) would query AI/module for suggestions.
   */
  // PUBLIC_INTERFACE
  onPlan(): void {
    this.touched.distance = true;
    this.touched.mood = true;
    this.touched.budget = true;
    this.error = '';

    if (!this.isFormValid()) {
      this.error = 'Please complete all fields for trip planning.';
      return;
    }
    // In future, could pass state to AI component or as route params/query!
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      // Route to AI Suggestions page (SSR-safe)
      const router = inject(Router);
      router.navigate(['/ai-suggestions']);
    }, 500);
  }
}
