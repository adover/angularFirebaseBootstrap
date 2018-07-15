import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LoginComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                canActivate: [AuthGuard],
            },
        ],
    },

    {
        path: 'signup',
        component: SignupComponent,
        // canActivate: [AuthGuard], TODO: Add an opposing authGuard here
    },

    { path: '**', component: NotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
