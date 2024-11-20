import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { ReviewCardComponent } from "../../components/dashboard/review-card/review-card.component";
import { ApiService } from '../../services/api.service';
import { IUser, IUserResponse } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterLink, FooterComponent, ReviewCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private apiService = inject(ApiService);

  constructor() { }

  async registerUser() {
    const user: IUser = {
      name: 'This is a test',
      surname: 'Doe',
      phone: '1234567890',
      password: 'password',
      email: 'test@test.com'
    }

    try {
      const response = await this.apiService.registerUser(user);
      console.log('Response:', response);
    } catch (error: any) {
      const errorResponse = error.error as IUserResponse;

      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }
  }

}
