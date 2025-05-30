import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookTableComponent } from './book-table/book-table.component';
import { OurMenuComponent } from './our-menu/our-menu.component';


export const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'book-table', component: BookTableComponent },
  { path: 'menu-page', component: OurMenuComponent} ,
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
];
