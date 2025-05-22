import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Lista de Usuarios</h2>
    <ul>
      @for (user of userService.getUsers(); track user.id) {
        <li>
          <a [routerLink]="['/users', user.id]">{{ user.name }}</a>
        </li>
      }
    </ul>
  `,
})
export class UserListComponent {
  userService = inject(UserService); // Inyección directa

  ngOnInit() {
    this.userService.loadUsers(); // Carga los datos al iniciar
  }
}