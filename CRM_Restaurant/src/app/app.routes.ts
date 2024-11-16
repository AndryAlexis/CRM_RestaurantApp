import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Menu',
    pathMatch: 'full'
  },
  {
    path: 'reservations',
    component: ReservationsComponent,
    title: 'Reservations',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard/users/:id',
    component: ViewUserDashboardComponent,
    title: 'User Detail',
    pathMatch: 'full'
  },
  {
    path: 'dashboard/menu',
    component: MenuDashboardComponent,
    title: 'Menu Dashboard',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent,
    title: 'User',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
