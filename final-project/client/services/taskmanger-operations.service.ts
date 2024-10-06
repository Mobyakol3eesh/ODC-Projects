import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from '../classes/task';
import { Subject } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskmangerOperationsService  {
  private tasksUpdated = new Subject<Task[]>();
  tasks : Task[] = [];

  constructor() {}
  addTask(taskName : string) {
    this.tasks.push(new Task(taskName));
    this.tasksUpdated.next([...this.tasks]);
  }
  getTasks() {
    return [...this.tasks];
  }
  getTasksUpdateListener() {
    return this.tasksUpdated.asObservable(); 
  }
  deleteTask(taskName : string) {
    const index = this.tasks.findIndex(t => t.getName() === taskName);
    console.log(index);
    if (index >= 0) {
      this.tasks.splice(index,1);
      this.tasksUpdated.next([...this.tasks]);
    }
    
  }
  toggleTaskStatus(taskName : string) {
    let task = this.tasks.find(t => t.getName() === taskName);
    if (task) {
      task.toggleStatus();
      this.tasksUpdated.next([...this.tasks]);
    }
  } 
  updateTask(taskName : string, newName : string) {
    let task = this.tasks.find(t => t.getName() === taskName);
    if (task) {
      task.setNmame(newName);
      this.tasksUpdated.next([...this.tasks]);
    }
  }
  
}
