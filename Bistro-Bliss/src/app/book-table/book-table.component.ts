import { Component } from '@angular/core';
import { TopHeaderComponent } from "../top-header/top-header.component";
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [TopHeaderComponent, NavComponent ,FooterComponent],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.scss'
})
export class BookTableComponent {

}
