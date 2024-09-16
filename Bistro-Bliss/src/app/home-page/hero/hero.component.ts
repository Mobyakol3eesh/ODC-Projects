import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../top-header/top-header.component';
import { NavComponent } from '../../nav/nav.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink,TopHeaderComponent,NavComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
