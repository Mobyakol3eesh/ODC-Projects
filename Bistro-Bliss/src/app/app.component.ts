import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeroComponent } from './hero/hero.component';
import { BrowseMenuComponent } from './browse-menu/browse-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,TopHeaderComponent,HeroComponent,BrowseMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bistro-Bliss';
}
