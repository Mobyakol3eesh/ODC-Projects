import { provideRouter, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SwitchPageComponent } from './switch-page/switch-page.component';

export const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'switch-page', component: SwitchPageComponent },
  { path: '', redirectTo: 'switch-page', pathMatch: 'full' },
];
