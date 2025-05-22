import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // Si estás usando Standalone Components
  imports: [RouterOutlet],
  template: `
    <!-- Solo contiene el router outlet -->
    <router-outlet></router-outlet>
    
    <!-- Opcional: Puedes agregar un loader global aquí -->
    <div *ngIf="loading" class="global-loader">
      Cargando...
    </div>
  `,
  styles: [`
    .global-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba(0,0,0,0.5);
      color: white;
      text-align: center;
      padding: 10px;
      z-index: 1000;
    }
  `]
})
export class AppComponent {
  // Opcional: Loader global
  loading = false;
  
  // Si necesitas inyectar servicios para manejo global
  constructor() {}
}