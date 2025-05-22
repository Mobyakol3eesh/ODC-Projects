import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from '../../auth/auth-guard.service';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent ,canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent ,canActivate: [AuthGuardService]},
    {path: 'home' , component: HomeComponent , canActivate: [AuthGuardService]},
    
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
