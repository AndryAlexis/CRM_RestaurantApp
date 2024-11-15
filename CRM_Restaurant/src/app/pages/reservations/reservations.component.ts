import { Component } from '@angular/core';
import { CalendarComponent } from "../../components/calendar/calendar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CalendarComponent, HeaderComponent, ReactiveFormsModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      comensales: new FormControl('', [Validators.required, Validators.minLength(1)]),
      otraCosa: new FormControl('', [Validators.required]),
    })
  }

  ngSubmit() {
    console.log(this.form.value);
  }

}