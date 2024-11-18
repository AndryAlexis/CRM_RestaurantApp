import { Component } from '@angular/core';
import { HeaderDashboardComponent } from "../../components/dashboard/header-dashboard/header-dashboard.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-user-dashboard',
  standalone: true,
  imports: [HeaderDashboardComponent, RouterLink],
  templateUrl: './view-user-dashboard.component.html',
  styleUrl: './view-user-dashboard.component.css'
})
export class ViewUserDashboardComponent {

}
