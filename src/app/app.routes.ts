import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UserListComponent } from './pages/user-list/user-list.component';
// import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent,
    title: 'Login' 
  },
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivate: [AuthGuard], 
    title: 'Dashboard', 
    children: [
      { 
        path: 'users', 
        component: UserListComponent,
        title: 'Lista de Usuarios'
      },
      // { 
      //   path: 'users/:id', 
      //   component: UserDetailComponent,
      //   title: 'Detalles de Usuario'
      // },
      { 
        path: '', 
        redirectTo: 'users', 
        pathMatch: 'full' 
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];