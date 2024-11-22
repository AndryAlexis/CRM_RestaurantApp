import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ReviewsService } from '../../services/reviews.service';
import { Comment } from '@angular/compiler';
import { IUserResponse } from '../../interfaces/user.interfaces';
import { MenuService } from '../../services/menu.service';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  service = inject(MenuService);
  data?: any;
  dishes?: any;
  desserts?: any[];
  mainDishes?: any[];
  starters?: any[];

  async ngOnInit() { 
    const date = new Date().toISOString().split('T')[0];
    const result = await this.service.getDailyMenu(date);
    this.data = result;
    this.dishes = this.data.dishes;

    this.desserts = this.getDishByType(this.dishes, 'dessert');
    this.mainDishes = this.getDishByType(this.dishes, 'main');
    this.starters = this.getDishByType(this.dishes, 'starters');

  }

  getDishByType( array: any[], type: string ) {
  return array.filter((dish: any) => {
      return dish.type === type
    });
  }
}
