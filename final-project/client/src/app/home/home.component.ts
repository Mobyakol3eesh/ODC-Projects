import { Component, inject, OnInit, ViewChildren } from '@angular/core';
import { TaskAdderComponent } from "./task-adder/task-adder.component";
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskmangerOperationsService } from '../../../services/taskmanger-operations.service';
import { Task } from '../../../classes/task';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskAdderComponent,TaskItemComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private taskMangerOpService : TaskmangerOperationsService) {};
  tasks? : Task[] ;

  private tasksSub: Subscription = new Subscription();
  httpClient = inject(HttpClient);
  ngOnInit() {
    
    this.taskMangerOpService.intializedTasks();
    console.log(document.cookie);
    this.tasks = this.taskMangerOpService.getTasks();  
    // this.httpClient.get<Task[]>('http://localhost:3000/login').subscribe((res: Task[]) => {  
    //   this.tasks = res;
    // });
    this.tasksSub = this.taskMangerOpService.getTasksUpdateListener()
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
        console.log(this.tasks);
      });
      
  }
  ngOnDestroy() {
    this.tasksSub.unsubscribe();  
  }

}
