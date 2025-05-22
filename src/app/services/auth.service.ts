// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(credentials: any): boolean {
    // Lógica de autenticación (simulada)
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      this.isAuthenticated = true;
      localStorage.setItem('token', 'fake-jwt-token');
      this.router.navigate(['/app']); // Redirige al layout principal
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}