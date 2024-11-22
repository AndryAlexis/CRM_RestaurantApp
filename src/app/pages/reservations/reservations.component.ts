import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ReservationService } from '../../services/reservation.service';
import { IReservation } from '../../interfaces/ireservation.interface';

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

  constructor() {
    this.form = new FormGroup({
      date: new FormControl('2024-11-25', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      guests: new FormControl(1, [Validators.required, Validators.min(1)]),
      location: new FormControl('', [Validators.required])
    }, [])
  }

  ngSubmit() {
    const reservation: IReservation = this.form.value;
    reservation.status = 'pending';
    reservation.user_id = 1;
    console.log(reservation)
    this.reservationService.createReservation(this.form.value)
    this.form.reset({
      date: '2024-11-25',
      time: '',
      guests: 1,
      location: '',
    })
  }
}
