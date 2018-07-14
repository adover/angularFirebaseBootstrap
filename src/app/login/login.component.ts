import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CONSTANTS } from '../constants/app.constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
        const { required, email } = Validators;

        this.loginForm = this.formBuilder.group({
            email: ['', [required, email]],
            password: ['', required],
        });
    }

    ngOnInit() {}

    signInWithCredentials(email: string, password: string) {

    }

    signInWithFacebook() {
        this.authService.signInWithFacebook()
        .then(res => {
            this.router.navigate([CONSTANTS.loggedInUrl]);
        }).catch(err => console.log(err));
    }

    signInWithGoogle() {
        this.authService.signInWithGoogle()
        .then(res => {
            this.router.navigate([CONSTANTS.loggedInUrl]);
        }).catch(err => console.log(err));
    }
}
