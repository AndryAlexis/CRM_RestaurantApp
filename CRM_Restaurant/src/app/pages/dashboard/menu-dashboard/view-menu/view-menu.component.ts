import { Component } from '@angular/core';
import { HeaderDashboardComponent } from "../../../../components/dashboard/header-dashboard/header-dashboard.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-menu',
  standalone: true,
  imports: [HeaderDashboardComponent, RouterLink],
  templateUrl: './view-menu.component.html',
  styleUrl: './view-menu.component.css'
})
export class ViewMenuComponent {

}
