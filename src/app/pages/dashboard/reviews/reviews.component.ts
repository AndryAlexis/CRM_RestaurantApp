import { Component, inject } from '@angular/core';
import { HeaderDashboardComponent } from "../../../components/dashboard/header-dashboard/header-dashboard.component";
import { ReviewCardComponent } from "../../../components/dashboard/review-card/review-card.component";
import { ReviewsService } from '../../../services/reviews.service';
import { IReviews } from '../../../interfaces/ireviews.interface';
import { ApiService } from '../../../services/api.service'

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [HeaderDashboardComponent, ReviewCardComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

  private service = inject(ReviewsService);
  private userService = inject(ApiService)
  reviews: IReviews[] = [];
  users: any[] = [];
  




  async ngOnInit() {
    await this.loadReviews();
  }

  async loadReviews() {
    try {
      const response = await this.service.getReviewsAll();
      if (response) {
        this.reviews = response.data.reviews;
       
      }
    } catch (error: any) {
      const errorResponse = error.error as any;
      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }
  }



  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}