import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private router: Router
  ) {}
  userId: any | undefined;
  activeUser: User = new User();
  editActive: Boolean = false;
  showProgressBar: Boolean = false;
  showMessage: Boolean = false;
  birthDate: Date = new Date(1970, 1, 1);

  async ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
    });

    console.log('User ID:', this.userId);
    await this.getActiveUser(this.userId);
  }

  getActiveUser(userId: any) {
    this.firestore
      .collection('users')
      .doc(userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.activeUser = new User(user);
        console.log('User:', this.activeUser);
        this.birthDate = new Date(user.birthdate);
        console.log(this.birthDate);
      });
  }

  toggleEdit() {
    this.editActive === true
      ? (this.editActive = false)
      : (this.editActive = true);
  }

  deleteUser() {
    this.showProgressBar = true;
    // this.firestore.collection('users').doc(this.userId).valueChanges().unsubscribe();
    this.firestore.collection('users').doc(this.userId).delete();
    setTimeout(() => {
      this.showProgressBar = false;
      this.showMessage = true;
      setTimeout(() => {
        this.router.navigate(['/user']);
        this.showMessage = false;
      }, 1000);
    }, 1000);
  }
  async updateUser() {
    console.log(this.activeUser);
    this.activeUser.birthdate = this.birthDate?.getTime();
    await this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.activeUser.toJson());
    setTimeout(() => {
      this.showProgressBar = false;
    }, 1000);
  }
}
