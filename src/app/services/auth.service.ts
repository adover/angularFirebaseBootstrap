import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { CONSTANTS } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;

    redirectUrl: string;

    constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
        this.user = firebaseAuth.authState;
    }

    isLoggedIn = () => Boolean(this.userDetails);

    logout() {
        this.firebaseAuth.auth.signOut()
        .then(res => this.router.navigate([CONSTANTS.loggedOutUrl]));
    }

    signUpWithCredentials(email: string, password: string) {
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    signInWithCredentials(email: string, password: string) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signInWithFacebook() {
        return this.firebaseAuth.auth.signInWithPopup(
            new firebase.auth.FacebookAuthProvider()
        );
    }

    signInWithGoogle() {
        return this.firebaseAuth.auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        );
     }
}
