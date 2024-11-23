
import { Component, inject, Input } from '@angular/core';
import { ReservationService } from '../../../services/reservation.service';
import { DatePipe } from '@angular/common';
import { TraductorPipe } from '../../../pipes/traductor.pipe';
import { TablesPipe } from '../../../pipes/tables.pipe';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-reservations-card',
  standalone: true,
  imports: [DatePipe, TraductorPipe, TablesPipe],
  templateUrl: './reservations-card.component.html',
  styleUrl: './reservations-card.component.css'
})
export class ReservationsCardComponent {

  @Input() reservation: any;
  reservationServices = inject(ReservationService)
  status!: string;
  id!: string;

  async changeStatus(event: MouseEvent) {
    const button = event.target as HTMLInputElement
    this.status = button.value
    const { id } = this.reservation
    await this.reservationServices.changeStatusReservation(id, this.status)
    const [modifiedReservation] = await this.reservationServices.getReservationById(id)
    this.reservation = modifiedReservation
  }

  isUserAdmin() {
    const token = localStorage.getItem('token') as string;
    const decodedToken = jwtDecode(token) as { role: string }
    const role = decodedToken.role
    return role === 'admin' ? true : false
  }
}
