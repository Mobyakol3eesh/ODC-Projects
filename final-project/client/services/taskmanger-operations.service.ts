import { Injectable } from '@angular/core';
import { Task } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class TaskmangerOperationsService {
  Tasks : Task[] = [];

  addTask(taskName : string) {
    this.Tasks.push(new Task(taskName));
  }
  
}
