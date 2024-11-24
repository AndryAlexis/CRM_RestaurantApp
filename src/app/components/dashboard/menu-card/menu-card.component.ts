import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent {

  // Recibir el menú desde el componente padre
  @Input() menu: any = {};

}
