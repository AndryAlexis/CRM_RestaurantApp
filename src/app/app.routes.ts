import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { MenuDashboardComponent } from './pages/dashboard/menu-dashboard/menu-dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { ViewUserDashboardComponent } from './pages/view-user-dashboard/view-user-dashboard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent as HomeDashboardComponent } from './pages/dashboard/home/home.component';
import { ViewMenuComponent } from './pages/dashboard/menu-dashboard/view-menu/view-menu.component';
import { DeleteComponent as DeleteMenuComponent } from './pages/dashboard/menu-dashboard/delete/delete.component';
import { UpdateComponent as UpdateMenuComponent } from './pages/dashboard/menu-dashboard/update/update.component';
import { HomeComponent as HomeMenuComponent } from './pages/dashboard/menu/home/home.component';
import { NewMenuComponent } from './pages/dashboard/new-menu/new-menu.component';
import { UsuariosRegistradosComponent } from './pages/dashboard/usuarios-registrados/usuarios-registrados.component';

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

    children: [
      {
        path: '',
        component: HomeDashboardComponent,
        title: 'Home Dashboard',
      },
      {
        path: 'users/:id',
        component: ViewUserDashboardComponent,
        title: 'User Detail',
      },
      {
        path: 'usuarios-registrados',
        component: UsuariosRegistradosComponent,
        title: 'Usuarios Registrados'
      },
      {
        path: 'create-menu',
        component: NewMenuComponent,
        title: 'Create Menu',
      },
      {
        path: 'menu',
        component: MenuDashboardComponent,
        title: 'Menu Dashboard',
        children: [
          {
            path: '',
            component: HomeMenuComponent,
            title: 'Home Menu',
          },
          {
            path: 'view/:id',
            component: ViewMenuComponent,
            title: 'View Menu',
          },
          {
            path: 'delete/:id',
            component: DeleteMenuComponent,
            title: 'Delete Menu',
          },
          {
            path: 'update/:id',
            component: UpdateMenuComponent,
            title: 'Update Menu',
          }
        ]
      },
    ]
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
