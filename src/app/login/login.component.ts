import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from '../constants/app.constants';
import { AuthService } from '../services/auth.service';
import { FormValidationService } from '../services/form.validation.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private formValidation: FormValidationService,
        private router: Router
    ) {
        const { required, email } = Validators;

        this.loginForm = this.formBuilder.group({
            email: ['', [required, email]],
            password: ['', required],
        });
    }

    ngOnInit() {}

    isInvalid = (c: string, type: string[]): boolean => this.formValidation.isInvalid(this.loginForm, c, type);

    onSubmit() {
        if (this.loginForm.valid) {
            const email = this.loginForm.get('email').value;
            const password = this.loginForm.get('password').value;

            this.authService.signInWithCredentials(email, password)
                .catch(e => {
                    console.log(e);
                });
        } else {
            this.formValidation.validateAllFormFields(this.loginForm);
        }
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
