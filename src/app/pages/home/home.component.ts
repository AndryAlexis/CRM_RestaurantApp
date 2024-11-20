import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { ReviewCardComponent } from "../../components/dashboard/review-card/review-card.component";
import { ApiService } from '../../services/api.service';
import { IUserRegister, IUserResponse, IUserLogin, IUserUpdate, IUserLoginResponse } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterLink, FooterComponent, ReviewCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private apiService = inject(ApiService);
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODF9.TZcL1_cBttvA6Nxm2nPoCiAKV5bM0zVQkQE_IfeH1qA'

  async registerUser() {
    const user: IUserRegister = {
      name: 'This is a test',
      surname: 'Doe',
      phone: '1234567890',
      password: 'password',
      email: 'test@test.com'
    }

    try {
      const response: IUserResponse = await this.apiService.registerUser(user);
      console.log('Response:', response);
    } catch (error: any) {
      const errorResponse = error.error as IUserResponse;

      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }
  }

  /**
   * Authenticates a user by logging them in with email and password
   * Stores the JWT token in localStorage upon successful login
   */
  async loginUser() {
    // Create login credentials object
    const user: IUserLogin = {
      email: 'test@test.com',
      password: 'password'
    }

    try {
      // Attempt to login user via API service
      const response: IUserLoginResponse = await this.apiService.loginUser(user);

      // Store JWT token in localStorage for subsequent authenticated requests
      localStorage.setItem('token', response.token);

      console.log(localStorage.getItem('token'))

    } catch (error: any) {
      // Handle login error response
      const errorResponse = error.error as IUserResponse;
      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }
  }

  async updateUser() {
    const user: IUserUpdate = {
      email: 'andrytest@test.com',
      password: 'password',
    }

    try {
      const response: IUserResponse = await this.apiService.updateUser(user);
      console.log('Response:', response);
    } catch (error: any) {
      const errorResponse = error.error as IUserResponse;
      const { status, title, message } = errorResponse;
      console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
    }
  }

}
