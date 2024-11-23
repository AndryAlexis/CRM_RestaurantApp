import { Component, inject } from '@angular/core';
import { HeaderDashboardComponent } from '../../../components/dashboard/header-dashboard/header-dashboard.component';
import { UsersCardComponent } from "../../../components/dashboard/users-card/users-card.component";
import { ApiService } from '../../../services/api.service';
import { IUserResponse } from '../../../interfaces/user.interfaces';

@Component({
  selector: 'app-usuarios-registrados',
  standalone: true,
  imports: [HeaderDashboardComponent, UsersCardComponent],
  templateUrl: './usuarios-registrados.component.html',
  styleUrls: ['./usuarios-registrados.component.css']
})
export class UsuariosRegistradosComponent {

  private usersService = inject(ApiService);
  users: any[] = [];

  async ngOnInit(): Promise<any> {
    await this.loadUsers(); // Cargar usuarios al iniciar
  }

  async loadUsers() {
    try {
      const users = await this.usersService.getAllUsersAdmin();
      this.users = users.data.users;
    } catch (error: any) {
      const errorResponse = error.error as IUserResponse;
      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }
  }

  async onDeleteUser() {
    await this.loadUsers();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}