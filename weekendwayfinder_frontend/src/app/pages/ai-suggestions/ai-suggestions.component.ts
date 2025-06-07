import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-ai-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-suggestions.component.html',
  styleUrls: ['./ai-suggestions.component.css']
})
export class AiSuggestionsComponent {
  trips = [
    {
      title: 'Quiet Lake Retreat',
      desc: 'Nature, canoeing, cozy cabins, perfect for relaxation.',
      mood: 'Relaxing',
      budget: '$$',
      distance: '90km'
    },
    {
      title: 'Urban Adventure',
      desc: 'Street food, art galleries, walkable city experience.',
      mood: 'Adventurous',
      budget: '$',
      distance: '45km'
    },
    {
      title: 'Cultural Heritage Trail',
      desc: 'Museums, guided tours, and local cuisine, all weekend.',
      mood: 'Cultural',
      budget: '$$$',
      distance: '200km'
    },
  ];
}
