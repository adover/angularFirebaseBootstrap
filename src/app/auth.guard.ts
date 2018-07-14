import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CONSTANTS } from './constants/app.constants';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const url = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) { return true; }

        this.authService.redirectUrl = url;

        this.router.navigate([CONSTANTS.loggedOutUrl]);

        return false;
    }
}
