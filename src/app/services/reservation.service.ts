import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IReservation } from '../interfaces/ireservation.interface';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private http = inject(HttpClient);
  private rootUrl = 'http://localhost:3000/api';


  createReservation(reservation: any): Promise<any> {
    return firstValueFrom(this.http.post<any>(`${this.rootUrl}/reservations`, reservation));
  }
}
