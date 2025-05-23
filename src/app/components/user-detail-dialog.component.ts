import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../services/user.service';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-detail-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatCardModule, MatIconModule],
  templateUrl: './user-detail-dialog.component.html',
  styleUrls: ['./user-detail-dialog.component.css']
})
export class UserDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: User) {}
}
