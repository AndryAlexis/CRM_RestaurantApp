import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ReviewsService } from '../../services/reviews.service';
import { Comment } from '@angular/compiler';
import { IUserResponse } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {



}
