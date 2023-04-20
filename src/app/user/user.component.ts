import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  // user: User = new User();

  constructor(public dialog: MatDialog) {}

  openAddUserDialog() {
    console.log('add user dialog');
    this.dialog.open(DialogAddUserComponent, {
      minHeight: '400px',
      width: '600px',
    });
  }
}
