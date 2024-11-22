import { Component, inject } from '@angular/core';
import { ReviewCardComponent } from "../../../components/dashboard/review-card/review-card.component";
import { ReservationsCardComponent } from "../../../components/dashboard/reservations-card/reservations-card.component";
import { HeaderDashboardComponent } from "../../../components/dashboard/header-dashboard/header-dashboard.component";
import { RouterLink } from "@angular/router";
import { NewUsersCardComponent } from "../../../components/dashboard/new-users-card/new-users-card.component";
import { ReviewsService } from '../../../services/reviews.service';
import { IReviews } from '../../../interfaces/ireviews.interface';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReviewCardComponent, ReservationsCardComponent, HeaderDashboardComponent, RouterLink, NewUsersCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  private reviewService = inject(ReviewsService);
  private apiService = inject(ApiService);

  reviews: IReviews[] = [];
  users: any[] = [];

  async ngOnInit() {
    try {
      const response = await this.reviewService.getSomeReviews(4, 'desc');
      this.reviews = response.data.reviews;
    } catch (error: any) {
      const errorResponse = error.error as any;
      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }


    try {
      const response = await this.apiService.getSomeUsers(3, 'desc');
      this.users = response.data.users;
    } catch (error: any) {
      console.error('Error:', error);
    }
  }
}
