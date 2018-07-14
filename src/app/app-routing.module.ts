import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

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
    { path: '**', component: NotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
