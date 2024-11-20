import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReviewsService } from '../../services/reviews.service';
import { IUserResponse } from '../../interfaces/user.interfaces';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-review',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.css'
})
export class CreateReviewComponent {

  reviewForm: FormGroup;
  private reviewsService = inject(ReviewsService);
  private router = inject(Router);

  constructor() {
    this.reviewForm = new FormGroup({
      rating: new FormControl(5, [Validators.required]),
      comment: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      this.createReview();
    }
  }

  // TODO: Avisar al usuario si la reseña no se ha creado correctamente con sweetalert2
  async createReview() {
    try {
      if (this.reviewForm.valid) {
        this.reviewForm.patchValue({
          rating: this.reviewForm.get('rating')?.value,
          comment: this.reviewForm.get('comment')?.value
        });
        const rating = this.reviewForm.get('rating')?.value;
        const comment = this.reviewForm.get('comment')?.value;
        const reviews = await this.reviewsService.createReview({
          comment: comment,
          rating: rating
        });
        Swal.fire({
          title: "¡Gracias por tu comentario!",
          icon: "success",
          preConfirm: () => {
            this.router.navigate(['/']);
          }
        });
        this.reviewForm.reset();

      }
    } catch (error: any) {
      const errorResponse = error.error as IUserResponse;
      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }
  }

  async getReviews() {
    try {
      const reviews = await this.reviewsService.getReviews();
      console.log(reviews);
    }
    catch (error: any) {
      const errorResponse = error.error as IUserResponse;
      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }
  }

  async deleteReview(id: string) {
    try {
      const reviews = await this.reviewsService.deleteReview(id);
      console.log(reviews);
    }
    catch (error: any) {
      const errorResponse = error.error as IUserResponse;
      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }
  }


}
