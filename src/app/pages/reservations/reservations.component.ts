import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ReservationService } from '../../services/reservation.service';
import { IReservation } from '../../interfaces/ireservation.interface';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {

  form: FormGroup;
  reservationService = inject(ReservationService)
  currentDate = new Date()
  today: string = this.currentDate.toLocaleDateString('en-CA')


  constructor() {
    this.form = new FormGroup({
      date: new FormControl(this.today, [Validators.required]),
      time: new FormControl('', [Validators.required]),
      guests: new FormControl(1, [Validators.required, Validators.min(1)]),
      location: new FormControl('', [Validators.required])
    }, [])
  }


  ngSubmit() {
    // Get form values and create reservation
    const reservation: IReservation = this.form.value;
    reservation.status = 'pending';

    // Get and validate token
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }

    // Extract user ID from token and add to reservation
    const decodedToken = jwtDecode(token) as { id: number };
    reservation.user_id = decodedToken.id;


    try {
      // Submit reservation and reset form
      this.reservationService.createReservation(reservation);
      this.form.reset({
        date: this.today,
        time: '',
        guests: 1,
        location: ''
      });

      Swal.fire({
        title: 'Reservation created successfully',
        icon: 'success',
      })
    } catch (error) {
      Swal.fire({
        title: 'Error creating reservation',
        icon: 'error',
      })
    }
  }
}
