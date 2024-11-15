import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  @Output() dateSelected = new EventEmitter<string>(); // Emisor para la fecha seleccionada

  selectedDate: string = '';

  dateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedDate = input.value;
    this.dateSelected.emit(this.selectedDate);
  }

}
