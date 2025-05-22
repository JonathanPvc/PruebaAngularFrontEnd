// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="username" name="username" placeholder="Usuario" required>
      <input [(ngModel)]="password" name="password" type="password" placeholder="Contraseña" required>
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (users: any[]) => { // Tipado explícito
        if (users.length > 0) {
          this.router.navigate(['/users']);
        } else {
          alert('Credenciales incorrectas');
        }
      },
      error: (err: Error) => console.error('Error en login:', err), // Tipado explícito
    });
  }
}