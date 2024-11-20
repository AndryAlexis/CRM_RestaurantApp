import { Injectable, inject } from '@angular/core';
import { IUser, IUserResponse } from '../interfaces/user.interfaces';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private rootUrl = 'http://localhost:3000/api';
  private http = inject(HttpClient);

  /**
   * Registers a new user in the system
   * @param user The user data to register
   * @returns Promise that resolves with the registration response
   */
  async registerUser(user: IUser): Promise<IUserResponse> {
    return await firstValueFrom(
      this.http.post<IUserResponse>(`${this.rootUrl}/user`, user)
    );
  }
}
