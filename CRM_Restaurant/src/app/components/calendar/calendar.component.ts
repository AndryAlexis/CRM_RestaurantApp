import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  selectedDate: string = '';

  dateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedDate = input.value;
    console.log(this.selectedDate);
  }

}
