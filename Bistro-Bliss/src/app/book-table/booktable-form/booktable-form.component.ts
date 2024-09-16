import { Component } from '@angular/core';

@Component({
  selector: 'app-booktable-form',
  standalone: true,
  imports: [BooktableFormComponent],
  templateUrl: './booktable-form.component.html',
  styleUrl: './booktable-form.component.scss',
})
export class BooktableFormComponent {
  bookTable(event: Event) {
    console.log('Table Booked');
  }
}
