import { firstValueFrom } from 'rxjs';
import { Component, inject } from '@angular/core';
import { HeaderDashboardComponent } from "../../components/dashboard/header-dashboard/header-dashboard.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IUserResponse } from '../../interfaces/user.interfaces';
import { ReservationService } from '../../services/reservation.service';
import { ReservationsCardComponent } from '../../components/dashboard/reservations-card/reservations-card.component';

@Component({
  selector: 'app-view-user-dashboard',
  standalone: true,
  imports: [HeaderDashboardComponent, RouterLink, ReservationsCardComponent],
  templateUrl: './view-user-dashboard.component.html',
  styleUrl: './view-user-dashboard.component.css'
})
export class ViewUserDashboardComponent {

  private reservationService = inject(ReservationService)
  private usersService = inject(ApiService);
  private route = inject(ActivatedRoute);
  user?: any;
  reservations: any[] = []

  ngOnInit() {
     this.loadData()
  }

  async loadUser() {
    try {
      const params = await firstValueFrom(this.route.params);
      const userId = params['id'];
      this.user = await this.usersService.getUserByIdAdmin(userId);
      this.user = this.user.data;

    } catch (error: any) {
      const errorResponse = error.error as IUserResponse;
      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }
  }

  async loadReservation() {
    this.reservations = await this.reservationService.getReservationByUserId(this.user?.id)
    console.log(this.user)
    console.log(this.reservations)
  }

  async loadData() {
    await this.loadUser()
    await this.loadReservation()
  }

}
