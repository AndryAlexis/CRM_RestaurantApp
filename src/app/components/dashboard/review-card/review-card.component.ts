import { Component, Input } from '@angular/core';
import { IReviews } from '../../../interfaces/ireviews.interface';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css'
})
export class ReviewCardComponent {

  @Input() rating: number = 5;
  @Input() comment: string = '';




}
