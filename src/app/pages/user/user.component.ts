import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ReviewCardComponent } from "../../components/dashboard/review-card/review-card.component";
import { ReservationsCardComponent } from "../../components/dashboard/reservations-card/reservations-card.component";
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { ReviewsService } from '../../services/reviews.service';
import { ReservationService } from '../../services/reservation.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, ReviewCardComponent, ReservationsCardComponent, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  reviews: any[] = [];
  reservations: any[] = [];

  private apiService = inject(ApiService);
  private service = inject(ReviewsService);
  private reservationService = inject(ReservationService);


  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  async onSubmit() {
    const dataUser = [];
    const formValues = this.userForm.value;
    for (const key in formValues) {
      const value = formValues[key].trim()
      if (value) {
        dataUser.push({ [key]: formValues[key] });
      }
    }
    const combinedObject = dataUser.reduce((acumulator, currentObject) => {
      return { ...acumulator, ...currentObject }
    }, {})
    try {
      await this.apiService.updateUser(combinedObject);
      Swal.fire({
        icon: 'success',
        title: 'El usuario se ha actualizado correctamente.',
        confirmButtonText: 'Aceptar'
      });
    } catch (error: any) {
      console.log(error, 'error')
      Swal.fire({
        icon: 'error',
        title: error.error.message,
        confirmButtonText: 'Aceptar'
      });
    }
  }


  ngOnInit() {
    this.loadReviews()
    this.loadReservations()
  }

  async loadReviews() {
    const result = await this.service.getReviews()
    this.reviews = result.data;
  }

  async loadReservations() {
    const user_id = this.getUserId()
    this.reservations = await this.reservationService.getReservationByUserId(user_id);
  }

  getUserId() {
    const token = localStorage.getItem('token') as string;
    const decodedToken = jwtDecode(token) as { id: number };
    const user_id = decodedToken.id;
    return user_id
  }
}
