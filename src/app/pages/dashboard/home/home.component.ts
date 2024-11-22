import { Component, inject } from '@angular/core';
import { ReviewCardComponent } from "../../../components/dashboard/review-card/review-card.component";
import { ReservationsCardComponent } from "../../../components/dashboard/reservations-card/reservations-card.component";
import { HeaderDashboardComponent } from "../../../components/dashboard/header-dashboard/header-dashboard.component";
import { RouterLink } from "@angular/router";
import { NewUsersCardComponent } from "../../../components/dashboard/new-users-card/new-users-card.component";
import { ReservationService } from '../../../services/reservation.service';
import { ICustomerReservationResponse } from '../../../interfaces/icustomer-reservation-response.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReviewCardComponent, ReservationsCardComponent, HeaderDashboardComponent, RouterLink, NewUsersCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  reservationService = inject(ReservationService)
  reservationsToday: ICustomerReservationResponse[] = [];
  reservations: ICustomerReservationResponse[] = [];
  currentDate = new Date()
  date: string = this.currentDate.toLocaleDateString('en-CA')

  ngOnInit() {
    this.loadReservations()
  }

  async loadReservations() {
    this.date = '2024-11-25'
    this.reservationsToday = await this.reservationService.getReservations({ date: this.date });
    const [first, second, third] = this.reservationsToday;
    this.reservations = [first, second, third]
    
  }
}

