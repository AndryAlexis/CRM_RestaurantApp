import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private apiService = inject(ApiService);
  private router = inject(Router);

  isCollapsed = true;
  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }


  userRole: string = '';
  isLoggedIn: boolean = false;

  async ngOnInit() {
    const user = await this.apiService.getUser(); // Obtiene el usuario
    this.userRole = user.data.role; // Asigna el rol del usuario

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
