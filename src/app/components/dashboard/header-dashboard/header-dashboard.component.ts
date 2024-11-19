import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.css']
})
export class HeaderDashboardComponent {
  isCollapsed = true;
  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
