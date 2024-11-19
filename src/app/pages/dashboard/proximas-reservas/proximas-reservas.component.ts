import { Component } from '@angular/core';
import { HeaderDashboardComponent } from '../../../components/dashboard/header-dashboard/header-dashboard.component';
import { ReservationsCardComponent } from '../../../components/dashboard/reservations-card/reservations-card.component';

@Component({
  selector: 'app-proximas-reservas',
  standalone: true,
  imports: [HeaderDashboardComponent, ReservationsCardComponent],
  templateUrl: './proximas-reservas.component.html',
  styleUrl: './proximas-reservas.component.css'
})
export class ProximasReservasComponent {

}
