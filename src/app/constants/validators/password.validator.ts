import { FormGroup } from '@angular/forms';

export class PasswordValidator {
    static validate(passwordFormGroup: FormGroup) {
        const password = passwordFormGroup.controls.password.value;
        const confirmPassword =
            passwordFormGroup.controls.confirmPassword.value;

        if (password === confirmPassword) {
            return { doesMatch: true };
        }

        return null;
    }
}
