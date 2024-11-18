import { Component } from '@angular/core';
import { ReviewCardComponent } from "../../../components/dashboard/review-card/review-card.component";
import { ReservationsCardComponent } from "../../../components/dashboard/reservations-card/reservations-card.component";
import { UsersCardComponent } from "../../../components/dashboard/users-card/users-card.component";
import { HeaderDashboardComponent } from "../../../components/dashboard/header-dashboard/header-dashboard.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReviewCardComponent, ReservationsCardComponent, UsersCardComponent, HeaderDashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
