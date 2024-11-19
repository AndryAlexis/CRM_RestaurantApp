import { Component } from '@angular/core';
import { HeaderDashboardComponent } from '../../../components/dashboard/header-dashboard/header-dashboard.component';
import { RouterLink, RouterModule } from '@angular/router';
import { UsersCardComponent } from "../../../components/dashboard/users-card/users-card.component";


@Component({
  selector: 'app-usuarios-registrados',
  standalone: true,
  imports: [HeaderDashboardComponent, UsersCardComponent],
  templateUrl: './usuarios-registrados.component.html',
  styleUrl: './usuarios-registrados.component.css'
})
export class UsuariosRegistradosComponent {

}
