import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserDetailDialogComponent } from '../../components/user-detail-dialog.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    UserDetailDialogComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {
  users: User[] = [];
  dataSource = new MatTableDataSource<User>();
  loading = true;
  error: string | null = null;
  displayedColumns: string[] = ['name', 'username', 'email', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.dataSource.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar los usuarios. Intente nuevamente.';
        this.loading = false;
      }
    });
  }

  viewDetails(user: User): void {
    this.dialog.open(UserDetailDialogComponent, {
      width: '30rem',
      data: user     
    });
  }
}
