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
  styleUrls: []
})
export class LoginComponent {
  loading = false;
  error: string | null = null;
  loginForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
// login.component.ts
onSubmit() {
  if (this.loginForm.invalid) return;

  this.loading = true;
  this.error = null;

  // Extrae valores asegurando que no son null
  const username = this.loginForm.value.username ?? '';
  const password = this.loginForm.value.password ?? '';

  // Crea objeto con tipos correctos
  const credentials = {
    username: username,
    password: password
  };

  this.authService.login(credentials).subscribe({
    next: (success) => {
      if (!success) {
        this.error = 'Credenciales incorrectas';
      }
      this.loading = false;
    },
    error: (err) => {
      this.error = err.message || 'Error en el login';
      this.loading = false;
    }
  });
}
}