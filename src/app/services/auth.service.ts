import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(credentials: { username: string, password: string }): Observable<{success: boolean, message?: string}> {
    return this.http.get<any[]>(
      `${this.apiUrl}/users?username=${credentials.username}&password=${credentials.password}`
    ).pipe(
      map(users => {
        if (users.length === 0) {
          return {success: false, message: 'Credenciales incorrectas'};
        }
        
        localStorage.setItem('token', 'fake-jwt-token');
        localStorage.setItem('currentUser', JSON.stringify(users[0]));
        localStorage.setItem('userName', users[0].username);

        return {success: true};
      }),
      catchError(error => {
        console.error('Error en login:', error);
        return of({success: false, message: 'Error en el servidor'});
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}