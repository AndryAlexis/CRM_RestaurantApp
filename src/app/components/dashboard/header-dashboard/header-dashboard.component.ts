import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.css']
})
export class HeaderDashboardComponent {

  private router = inject(Router);

  isCollapsed = true;
  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
