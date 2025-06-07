import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Trip Planner Component.
 * Displays travel preference form and, upon submission, shows AI suggestions below the form
 * based on user preferences while staying on the same page.
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
  public distance: string = '';
  public mood: string = '';
  public budget: string = '';
  public touched: { distance: boolean, mood: boolean, budget: boolean } = {
    distance: false, mood: false, budget: false
  };
  public error: string = '';
  public showSuggestions: boolean = false;

  // Mock AI trip data (expanded with new moods and rupee budget categories)
  private allTrips = [
    {
      title: 'Quiet Lake Retreat',
      desc: 'Nature, canoeing, cozy cabins, perfect for relaxation.',
      mood: 'relaxing',
      budget: '5k-10k',
      distance: 'medium'
    },
    {
      title: 'Urban Adventure',
      desc: 'Street food, art galleries, walkable city experience.',
      mood: 'adventurous',
      budget: 'below2k',
      distance: 'short'
    },
    {
      title: 'Cultural Heritage Trail',
      desc: 'Museums, guided tours, and local cuisine, all weekend.',
      mood: 'cultural',
      budget: 'above10k',
      distance: 'long'
    },
    {
      title: 'Forest Camping Expedition',
      desc: 'Campfires, hiking, and stargazing in the wild woods.',
      mood: 'nature',
      budget: '2k-5k',
      distance: 'long'
    },
    {
      title: 'Luxury Spa Escape',
      desc: 'Pampering, soothing massages, and delicious meals.',
      mood: 'luxury',
      budget: 'above10k',
      distance: 'medium'
    },
    {
      title: 'Town Food Crawl',
      desc: 'Try the best bakeries and diners within the city limits.',
      mood: 'foodie',
      budget: 'below2k',
      distance: 'short'
    },
    {
      title: 'Romantic Beach Getaway',
      desc: 'Private beaches, sunset cruises, candle-lit dinners.',
      mood: 'romantic',
      budget: '5k-10k',
      distance: 'medium'
    },
    {
      title: 'Family Amusement Park',
      desc: 'Fun rides, shows, family-friendly meals.',
      mood: 'family',
      budget: '2k-5k',
      distance: 'short'
    },
    {
      title: 'Temple & Spiritual Circle',
      desc: 'Serene temples, meditation and spiritual talks.',
      mood: 'spiritual',
      budget: '2k-5k',
      distance: 'medium'
    },
    {
      title: 'Wellness Yoga Camp',
      desc: 'Yoga, massages, detox food and mindfulness.',
      mood: 'wellness',
      budget: '5k-10k',
      distance: 'medium'
    },
    {
      title: 'Wildlife Jungle Safari',
      desc: 'Jeep safari, wildlife spotting, tent camping.',
      mood: 'adventurous',
      budget: '5k-10k',
      distance: 'long'
    }
  ];

  public tripSuggestions: {
    title: string; desc: string; mood: string; budget: string; distance: string;
  }[] = [];

  constructor() {}

  /**
   * Handler for blur events to set validation touch flag.
   */
  public onBlur(field: 'distance' | 'mood' | 'budget') {
    this.touched[field] = true;
  }

  /**
   * Returns an error message for the given form field, or empty string if valid.
   */
  public getFieldError(field: 'distance' | 'mood' | 'budget'): string {
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
  public isFormValid(): boolean {
    return (
      this.distance !== '' && this.mood !== '' && this.budget !== '' &&
      this.getFieldError('distance') === '' &&
      this.getFieldError('mood') === '' &&
      this.getFieldError('budget') === ''
    );
  }

  /**
   * Handles trip planning form submission.
   * Displays AI suggestions below the form, filtered by user preferences.
   */
  // PUBLIC_INTERFACE
  public onPlan(): void {
    this.touched.distance = true;
    this.touched.mood = true;
    this.touched.budget = true;
    this.error = '';
    this.showSuggestions = false;

    if (!this.isFormValid()) {
      this.error = 'Please complete all fields for trip planning.';
      return;
    }

    // Filter suggestions dynamically
    this.tripSuggestions = this.allTrips.filter(
      t =>
        t.distance === this.distance &&
        t.mood === this.mood &&
        t.budget === this.budget
    );
    this.showSuggestions = true;
  }
}