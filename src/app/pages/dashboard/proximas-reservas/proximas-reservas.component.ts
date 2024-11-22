import { Component, inject } from '@angular/core';
import { HeaderDashboardComponent } from '../../../components/dashboard/header-dashboard/header-dashboard.component';
import { ReservationsCardComponent } from '../../../components/dashboard/reservations-card/reservations-card.component';
import { ReservationService } from '../../../services/reservation.service';
import { ICustomerReservationResponse } from '../../../interfaces/icustomer-reservation-response.interface';

@Component({
  selector: 'app-proximas-reservas',
  standalone: true,
  imports: [HeaderDashboardComponent, ReservationsCardComponent],
  templateUrl: './proximas-reservas.component.html',
  styleUrl: './proximas-reservas.component.css'
})
export class ProximasReservasComponent {

  reservationService = inject(ReservationService)
  reservations: ICustomerReservationResponse[] = []

  ngOnInit() {
    this.loadData()
  }

  async loadData() {
    this.reservations = await this.reservationService.getReservations({})
  }
}
