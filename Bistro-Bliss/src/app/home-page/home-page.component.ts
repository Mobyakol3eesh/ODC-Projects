import { Component } from '@angular/core';
import { TopHeaderComponent } from '../top-header/top-header.component';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { BrowseMenuComponent } from './browse-menu/browse-menu.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet,NavComponent,TopHeaderComponent,HeroComponent,BrowseMenuComponent,TestimonialsComponent,FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
