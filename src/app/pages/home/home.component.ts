import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { ReviewCardComponent } from "../../components/dashboard/review-card/review-card.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterLink, FooterComponent, ReviewCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
