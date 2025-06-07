import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * AI Suggestions Component.
 * Dynamically generates trip ideas based on user selections (mood, distance, budget).
 * Uses mock/sample data for demonstration. Visually styled, responsive and extensible.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-ai-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-suggestions.component.html',
  styleUrls: ['./ai-suggestions.component.css']
})
export class AiSuggestionsComponent {
  // Full mock trip catalogue (future: fetch from backend)
  private allTrips = [
    {
      title: 'Quiet Lake Retreat',
      desc: 'Nature, canoeing, cozy cabins, perfect for relaxation.',
      mood: 'relaxing',
      budget: 'medium',
      distance: 'medium'
    },
    {
      title: 'Urban Adventure',
      desc: 'Street food, art galleries, walkable city experience.',
      mood: 'adventurous',
      budget: 'low',
      distance: 'short'
    },
    {
      title: 'Cultural Heritage Trail',
      desc: 'Museums, guided tours, and local cuisine, all weekend.',
      mood: 'cultural',
      budget: 'high',
      distance: 'long'
    },
    {
      title: 'Forest Camping Expedition',
      desc: 'Campfires, hiking, and stargazing in the wild woods.',
      mood: 'adventurous',
      budget: 'medium',
      distance: 'long'
    },
    {
      title: 'Luxury Spa Escape',
      desc: 'Pampering, soothing massages, and delicious meals.',
      mood: 'relaxing',
      budget: 'high',
      distance: 'medium'
    },
    {
      title: 'Town Food Crawl',
      desc: 'Try the best bakeries and diners within the city limits.',
      mood: 'cultural',
      budget: 'low',
      distance: 'short'
    }
  ];

  /** Final filtered trip suggestions for display. */
  trips: {
    title: string; desc: string; mood: string; budget: string; distance: string;
  }[] = [];

  // Store user input here if available (future: fetch from state or backend)
  userMood: string = '';
  userBudget: string = '';
  userDistance: string = '';

  constructor() {
    // Demo: just show all trip suggestions as dynamic (future: could filter based on input)
    this.trips = [...this.allTrips];
  }
}
