import {Component, OnInit} from '@angular/core';
import {NgxFirebaseClientService} from '@ngx-firebase/client';
import { auth } from 'firebase/app';

export interface Identity {
  uid: string;
  displayName: string;
  photoURL: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public loaded: boolean;
  public user: Identity;
  public title = 'component-template';
  constructor(private firebase: NgxFirebaseClientService) { }

  ngOnInit() {
    // watch the Firebase auth session and update the app user on auth state changes
    // see https://firebase.google.com/docs/auth for complete web API
    this.firebase.auth().onAuthStateChanged(user => {
      this.loaded = true;
      this.user = user;
    });
  }

  signIn() {
    this.firebase.auth()
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(res => window.location.reload());
  }

  signOut() {
    this.firebase.auth()
      .signOut()
      .then(res => window.location.reload());
  }
}
