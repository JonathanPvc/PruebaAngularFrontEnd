import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule , CommonModule , MatIconModule],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
  
})
export class MainLayoutComponent implements OnInit {
  userName: string | null = null;

  constructor(private router: Router , private cdr: ChangeDetectorRef) {}

ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      this.userName = user.username || user.name;
      this.cdr.detectChanges();
    }
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
