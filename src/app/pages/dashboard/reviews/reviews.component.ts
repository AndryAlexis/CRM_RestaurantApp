import { Component } from '@angular/core';
import { HeaderDashboardComponent } from "../../../components/dashboard/header-dashboard/header-dashboard.component";
import { ReviewCardComponent } from "../../../components/dashboard/review-card/review-card.component";
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [HeaderDashboardComponent, ReviewCardComponent, RouterLink],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

}
