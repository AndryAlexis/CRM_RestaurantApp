import { Component } from '@angular/core';
import { ReviewCardComponent } from "../../../components/dashboard/review-card/review-card.component";
import { ReservationsCardComponent } from "../../../components/dashboard/reservations-card/reservations-card.component";
import { HeaderDashboardComponent } from "../../../components/dashboard/header-dashboard/header-dashboard.component";
import { RouterLink } from "@angular/router";
import { NewUsersCardComponent } from "../../../components/dashboard/new-users-card/new-users-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReviewCardComponent, ReservationsCardComponent, HeaderDashboardComponent, RouterLink, NewUsersCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
