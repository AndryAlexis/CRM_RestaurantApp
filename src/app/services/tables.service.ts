import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  private http = inject(HttpClient);
  private rootUrl = 'http://localhost:3000/api';

  getTables(): Promise<any> {
    const token = localStorage.getItem('token') as string;
    const headers = { 'Authorization': token };
    return firstValueFrom(
      this.http.get<any>(`${this.rootUrl}/tables`, { headers }));
  }

  createTable(table: any): Promise<any> {
    const token = localStorage.getItem('token') as string;
    const headers = { 'Authorization': token };
    return firstValueFrom(
      this.http.post<any>(`${this.rootUrl}/tables`, table, { headers })
    )
  }

  updateTableCapacity(id: number, capacity: number): Promise<any> {
    const token = localStorage.getItem('token') as string;
    const headers = { 'Authorization': token };
    return firstValueFrom(
      this.http.put<any>(`${this.rootUrl}/tables/${id}/capacity/${capacity}`, null, { headers })
    )
  }

  deleteTable(id: number): Promise<any> {
    const token = localStorage.getItem('token') as string;
    const headers = { 'Authorization': token };
    return firstValueFrom(
      this.http.delete<any>(`${this.rootUrl}/tables/${id}`, { headers })
    )
  }

}
