import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
    static validate(c: AbstractControl) {
        return c.get('password').value === c.get('confirmPassword').value
            ? null
            : { failedMatch: true };
    }
}
