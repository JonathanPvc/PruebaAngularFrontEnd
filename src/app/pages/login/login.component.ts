import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatError } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatError
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hidePassword = true; 
  loading = false;
  error: string | null = null;
  loginForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

onSubmit(): void {
  if (this.loginForm.invalid) return;

  this.loading = true;
  this.error = null;

  const credentials = {
    username: this.loginForm.value.username || '',
    password: this.loginForm.value.password || ''
  };

  const startTime = Date.now(); 

  this.authService.login(credentials).pipe(
    delay(2000)
  ).subscribe({
    next: (response) => {
      const elapsedTime = Date.now() - startTime;
      const remainingDelay = Math.max(0, 2000 - elapsedTime);
      
      setTimeout(() => {
        this.loading = false;
        if (response.success) {
          this.router.navigate(['/app']); 
        } else {
          this.error = response.message || 'Credenciales incorrectas';
        }
      }, remainingDelay);
    },
    error: (err) => {
      const elapsedTime = Date.now() - startTime;
      const remainingDelay = Math.max(0, 2000 - elapsedTime);
      
      setTimeout(() => {
        this.loading = false;
        this.error = 'Error de conexión con el servidor';
        console.error('Error en la solicitud:', err);
      }, remainingDelay);
    }
  });
}


showPasswordRecoveryAlert(): void {
    Swal.fire({
      title: 'Recuperación de contraseña',
      text: 'Estamos trabajando en esta funcionalidad. Por favor, contacta al soporte técnico.',
      icon: 'info',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#2E7D32', 
    });
  }


  showCreationAlert(): void {
    Swal.fire({
      title: 'Creación de cuenta',
      text: 'Estamos trabajando en esta funcionalidad. Por favor, contacta al soporte técnico.',
      icon: 'info',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#2E7D32', 
   
    });
  }


}