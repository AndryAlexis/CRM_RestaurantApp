import { Component, HostListener } from '@angular/core';
import { HeaderDashboardComponent } from "../../../components/dashboard/header-dashboard/header-dashboard.component";
import { ReviewCardComponent } from "../../../components/dashboard/review-card/review-card.component";


@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [HeaderDashboardComponent, ReviewCardComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {


  // Mostrar el botón que se muestra cuando se desplaza hacia abajo
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.getElementById('btn-top') as HTMLElement;
    if (window.scrollY > 100) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }

  // Función para desplazarse hacia arriba el botón
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
