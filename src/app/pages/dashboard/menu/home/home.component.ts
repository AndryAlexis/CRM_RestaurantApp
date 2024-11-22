import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { HeaderDashboardComponent } from '../../../../components/dashboard/header-dashboard/header-dashboard.component';
import { MenuCardComponent } from '../../../../components/dashboard/menu-card/menu-card.component';
import { MenuService } from '../../../../services/menu.service';
import { IUserResponse } from '../../../../interfaces/user.interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderDashboardComponent, MenuCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private menuService = inject(MenuService);
  menus: any[] = [];


  async ngOnInit() {
    try {
      const result = await this.menuService.getAllMenus('asc');
      this.menus = result.data;
      const date = result.data.date;
    } catch (error: any) {
      const errorResponse = error.error as IUserResponse;
      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }

  }
}
