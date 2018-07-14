import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        NavComponent,
        HomeComponent,
        LoginComponent,
        NotfoundComponent,
        SignupComponent,
    ],
    imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AppRoutingModule,
        BrowserModule,
        NgbModule.forRoot(),
        ReactiveFormsModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {}
