import { Component } from '@angular/core';
import { HeaderDashboardComponent } from "../../components/dashboard/header-dashboard/header-dashboard.component";
import { MenuCardComponent } from "../../components/menu-card/menu-card.component";

@Component({
  selector: 'app-menu-dashboard',
  standalone: true,
  imports: [HeaderDashboardComponent, MenuCardComponent],
  templateUrl: './menu-dashboard.component.html',
  styleUrl: './menu-dashboard.component.css'
})
export class MenuDashboardComponent {

}
