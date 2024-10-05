import { Component } from '@angular/core';
import { TaskAdderComponent } from "./task-adder/task-adder.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskAdderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
