import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-users-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './new-users-card.component.html',
  styleUrl: './new-users-card.component.css'
})
export class NewUsersCardComponent {

  @Input() user: any = {};

}
