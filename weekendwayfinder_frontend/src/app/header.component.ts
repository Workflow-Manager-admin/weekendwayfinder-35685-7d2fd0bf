import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
