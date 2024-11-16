import { Component } from '@angular/core';
import { UsersCardComponent } from "../../components/dashboard/users-card/users-card.component";
import { HeaderDashboardComponent } from "../../components/dashboard/header-dashboard/header-dashboard.component";
import { ReviewCardComponent } from "../../components/dashboard/review-card/review-card.component";
import { ReservationsCardComponent } from "../../components/dashboard/reservations-card/reservations-card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UsersCardComponent, HeaderDashboardComponent, ReviewCardComponent, ReservationsCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
