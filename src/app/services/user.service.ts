import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users = signal<any[]>([]); // Signal para almacenar usuarios

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.http.get('http://localhost:3000/users')
      .subscribe((data: any) => this.users.set(data));
  }

  getUsers() {
    return this.users(); // Devuelve la Signal (readonly)
  }
}