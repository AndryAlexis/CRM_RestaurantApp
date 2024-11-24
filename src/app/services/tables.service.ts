import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  private http = inject(HttpClient);
  private rootUrl = 'https://crm-restaurantapi-z9vj.onrender.com/api';

  getTables(): Promise<any> {
    return firstValueFrom(
      this.http.get<any>(`${this.rootUrl}/tables`));
  }

  createTable(table: any): Promise<any> {
    return firstValueFrom(
      this.http.post<any>(`${this.rootUrl}/tables`, table)
    )
  }

  updateTableCapacity(id: number, capacity: number): Promise<any> {
    return firstValueFrom(
      this.http.put<any>(`${this.rootUrl}/tables/${id}/capacity/${capacity}`, null)
    )
  }

  deleteTable(id: number): Promise<any> {
    return firstValueFrom(
      this.http.delete<any>(`${this.rootUrl}/tables/${id}`)
    )
  }

}
