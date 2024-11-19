import { Component } from '@angular/core';
import { HeaderDashboardComponent } from '../../../../components/dashboard/header-dashboard/header-dashboard.component';
import { MenuCardComponent } from '../../../../components/dashboard/menu-card/menu-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderDashboardComponent, MenuCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
