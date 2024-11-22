import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private http = inject(HttpClient);
  private rootUrl = 'http://localhost:3000/api/admin/menu';



  async getAllMenus(order: string): Promise<any> {
    const token = localStorage.getItem('token') as string;
    const headers = { 'Authorization': token };
    return await firstValueFrom(this.http.get<any>(`${this.rootUrl}?order=${order}`, { headers }));
  }


  async getMenuById(id: number): Promise<any> {
    const token = localStorage.getItem('token') as string;
    const headers = { 'Authorization': token };
    return await firstValueFrom(this.http.get<any>(`${this.rootUrl}/${id}`, { headers }));
  }

  async createMenu(name: string, date: string, dishes: any[]): Promise<any> {
    const token = localStorage.getItem('token') as string;
    const headers = { 'Authorization': token };
    return await firstValueFrom(this.http.post<any>(`${this.rootUrl}`, { name, date, dishes }, { headers }));
  }

}
