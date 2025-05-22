// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // URL de json-server

  constructor(private http: HttpClient) {}

  // Método login con tipado explícito
  login(username: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`);
  }
}