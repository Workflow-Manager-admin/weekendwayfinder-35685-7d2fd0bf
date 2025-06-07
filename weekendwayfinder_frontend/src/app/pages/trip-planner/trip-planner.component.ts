import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  // In future, this will be used to pass preferences to AI component

  // PUBLIC_INTERFACE
  onPlan(): void {
    // Submission logic placeholder
  }
}
