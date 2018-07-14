import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CONSTANTS } from '../constants/app.constants';
import { PasswordValidator } from '../constants/validators/password.validator';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    passwordGroup: FormGroup;

    constructor(private authService: AuthService, private formbuilder: FormBuilder, private router: Router) {
        const { required, email, minLength, maxLength } = Validators;
        this.passwordGroup = this.formbuilder.group({
            password: ['', required, minLength(6), maxLength(12)],
            confirmPassword: ['', required],
        }, {
            Validator: PasswordValidator.validate.bind(this)
        });

        this.signupForm = this.formbuilder.group({
            'name': ['', required],
            'email': ['', [required, email]],
            passwordFormGroup: this.passwordGroup
        });
    }

    ngOnInit() {}

    createWithCredentials() {}

    signInWithFacebook() {
        this.authService
            .signInWithFacebook()
            .then(res => {
                this.router.navigate([CONSTANTS.loggedInUrl]);
            })
            .catch(err => console.log(err));
    }

    signInWithGoogle() {
        this.authService
            .signInWithGoogle()
            .then(res => {
                this.router.navigate([CONSTANTS.loggedInUrl]);
            })
            .catch(err => console.log(err));
    }
}
