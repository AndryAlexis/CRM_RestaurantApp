import { Component, inject, Input } from '@angular/core';
import { HeaderDashboardComponent } from '../../../components/dashboard/header-dashboard/header-dashboard.component';
import { NewUsersCardComponent } from '../../../components/dashboard/new-users-card/new-users-card.component';
import { UsersCardComponent } from "../../../components/dashboard/users-card/users-card.component";
import { ApiService } from '../../../services/api.service';
import { IUserResponse } from '../../../interfaces/user.interfaces';


@Component({
  selector: 'app-usuarios-registrados',
  standalone: true,
  imports: [HeaderDashboardComponent, NewUsersCardComponent, UsersCardComponent],
  templateUrl: './usuarios-registrados.component.html',
  styleUrl: './usuarios-registrados.component.css'
})
export class UsuariosRegistradosComponent {

  private usersService = inject(ApiService);
  users: any[] = [];

  async ngOnInit(): Promise<any> {
    try {
      const users = await this.usersService.getAllUsersAdmin();
      this.users = users.data.users;
      console.log(this.users);
    } catch (error: any) {
      const errorResponse = error.error as IUserResponse;
      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }
  }


}
