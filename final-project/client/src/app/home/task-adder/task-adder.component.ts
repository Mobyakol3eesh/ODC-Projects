import { Component } from '@angular/core';
import { Task } from '../../../../classes/task';
import { TaskmangerOperationsService } from '../../../../services/taskmanger-operations.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-adder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-adder.component.html',
  styleUrl: './task-adder.component.scss'
})
export class TaskAdderComponent {
  constructor(private taskMangerOperationsService : TaskmangerOperationsService) {
    
  }
  taskName : string = '';

  addTask() {
    this.taskMangerOperationsService.addTask(this.taskName);
    this.taskName = '';

  }

}
