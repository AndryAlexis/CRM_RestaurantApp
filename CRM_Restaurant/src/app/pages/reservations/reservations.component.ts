import { Component } from '@angular/core';
import { CalendarComponent } from "../../components/calendar/calendar.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CalendarComponent, HeaderComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {

}
