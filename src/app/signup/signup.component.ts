import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from '../constants/app.constants';
import { AuthService } from '../services/auth.service';
import { FormValidationService } from '../services/form.validation.service';
import { PasswordValidator } from '../validators/password.validator';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    passwordGroup: FormGroup;

    constructor(
        private authService: AuthService,
        private formbuilder: FormBuilder,
        private formValidation: FormValidationService,
        private router: Router,
    ) {
        const { required, email, minLength, maxLength } = Validators;

        this.passwordGroup = this.formbuilder.group({
            password: ['', [required, minLength(6), maxLength(12)]],
            confirmPassword: ['', required],
        }, {
                validator: PasswordValidator.validate
            });

        this.signupForm = this.formbuilder.group({
            'name': ['', required],
            'email': ['', [required, email]],
            passwordGroup: this.passwordGroup
        });
    }

    ngOnInit() {
    }

    isInvalid(c: string, type: string[]): boolean {
        let f: FormGroup = this.signupForm;
        if (c.toLowerCase().indexOf('password') > -1) { f = this.passwordGroup; }

        return this.formValidation.isInvalid(f, c, type);
    }

    signupWithCredentials(email: string, password: string) {
        console.log(email, password);
    }

    signInWithFacebook(): void {
        this.authService
            .signInWithFacebook()
            .then(res => {
                this.router.navigate([CONSTANTS.loggedInUrl]);
            })
            .catch(err => console.log(err));
    }

    signInWithGoogle(): void {
        this.authService
            .signInWithGoogle()
            .then(res => {
                this.router.navigate([CONSTANTS.loggedInUrl]);
            })
            .catch(err => console.log(err));
    }
}
