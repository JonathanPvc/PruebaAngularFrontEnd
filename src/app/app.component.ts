import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
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
      background: rgba(67, 23, 226, 0.5);
      color: white;
      text-align: center;
      padding: 10px;
      z-index: 1000;
    }
  `]
})
export class AppComponent {
  loading = false;
  constructor() {}
}