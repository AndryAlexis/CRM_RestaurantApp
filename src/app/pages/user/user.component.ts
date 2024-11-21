import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ReviewCardComponent } from "../../components/dashboard/review-card/review-card.component";
import { ReservationsCardComponent } from "../../components/dashboard/reservations-card/reservations-card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, ReviewCardComponent, ReservationsCardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
