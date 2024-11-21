import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

export const authGuard: CanActivateFn = async (route, state) => {

  const apiService = inject(ApiService);
  const router = inject(Router);

  const token = localStorage.getItem('token') as string;
  if (token) {
    const response = await apiService.getUser();
    if (response !== null) {
      const role = response.data.role;
      if (role === 'admin') {
        return true;
      }
      router.navigate(['/']);
    }
  }
  return false;


};
