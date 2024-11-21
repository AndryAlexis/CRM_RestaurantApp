import { Component } from '@angular/core';
import { CalendarComponent } from "../../components/calendar/calendar.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      comensales: new FormControl(1, [Validators.required, Validators.min(1)]),
      horario: new FormControl('', [Validators.required]),
      ubicacion: new FormControl('', [Validators.required]),
      fecha: new FormControl('2024-11-25', [Validators.required]),
    }, [])
  }

  ngSubmit() {
    if (this.form.valid) {
      this.form.reset()
      

    } else {
      console.log('Formulario inválido');
    }
  }
}
