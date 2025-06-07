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
  // Full mock trip catalogue (now with new moods and rupee budget types)
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
