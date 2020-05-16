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
  public error: string;
  public title = 'component-template';

  get authLink() {
    // todo figure out a better way to get the project id dynamically
    const a: any = this.firebase.auth();
    const project = a.a.D.split('.').shift();
    return `https://console.firebase.google.com/u/0/project/${project}/authentication/providers`;
  }

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
      .then(res => window.location.reload(), e => {
        if (e.code === 'auth/unauthorized-domain') {
          const regExp = /\(([^)]+)\)/;
          const domain = regExp.exec(e.message)[1];
          this.error = `You need to add the domain "${domain}" to the list of authorized authentication domains in Firebase before signing in`;
        } else {
          this.error = e.message;
        }
      });
  }

  signOut() {
    this.firebase.auth()
      .signOut()
      .then(res => window.location.reload());
  }
}
