import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class FormValidationService {
    constructor() {}

    /**
     * Add this to your class
     * isValid = (f: FormGroup, c: string, type: string): boolean => this.formValidation.isValid(f, c, type);
     **/
    isInvalid(f: FormGroup, c: string, type: string[]): boolean {
        return Boolean(
            type.filter(t => f.controls[c].hasError(t) && f.controls[c].touched)
                .length,
        );
    }

    validateAllFormFields(f: FormGroup) {
        Object.keys(f.controls).forEach(field => {
            const control = f.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}
