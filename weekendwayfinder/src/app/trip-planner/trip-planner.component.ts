import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-planner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-planner.component.html',
  styleUrl: './trip-planner.component.css'
})
export class TripPlannerComponent {
  // PUBLIC_INTERFACE
  preferences = {
    distance: '',
    mood: '',
    budget: ''
  };

  // PUBLIC_INTERFACE
  submitPreferences(): void {
    // Placeholder: will interact with AI service in the future
  }
}
