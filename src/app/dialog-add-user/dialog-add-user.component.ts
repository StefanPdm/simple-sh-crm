import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  user: User = new User();
  dialog: any;
  birthDate: Date = new Date(1970, 1, 1);
  showProgressBar = false;

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogAddUserComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close(DialogAddUserComponent);
  }

  async saveUser() {
    this.showProgressBar = true;
    // this.dialogRef.close(DialogAddUserComponent);
    this.user.birthdate = this.birthDate?.getTime();
    await this.firestore
      .collection('users')
      .add(this.user.toJson())
      .then((result: any) => {
        console.log('Adding user finished', result);
      });
    setTimeout(() => {
      this.showProgressBar = false;
    }, 1000);
    this.dialogRef.close(DialogAddUserComponent);
  }
}
