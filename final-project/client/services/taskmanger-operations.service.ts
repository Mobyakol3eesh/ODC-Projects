import { inject, Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from '../classes/task';
import { Subject } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class TaskmangerOperationsService {
    private tasksUpdated = new Subject<Task[]>();
    tasks: Task[] = [];
    httpClient = inject(HttpClient);

    constructor() {}
    addTask(taskName: string) {
        this.tasks.push(new Task(taskName));
        this.tasksUpdated.next([...this.tasks]);
    }
    initializedTasks() {
        this.httpClient
            .get('http://localhost:3000/login', { withCredentials: true })
            .subscribe({
                next: (res: any) => {
                    this.tasks = Object.values(res).map(
                        (item: any) =>
                            new Task(item.taskName, item.date, item.isFulfiled)
                    );

                    console.log('Initialized Tasks:', this.tasks);
                },
                error: (err) => {
                    console.error('Error fetching tasks:', err);
                },
            });
    }

    getTasks() {
        return [...this.tasks];
    }
    getTasksUpdateListener() {
        return this.tasksUpdated.asObservable();
    }
    deleteTask(taskName: string) {
        const index = this.tasks.findIndex((t) => t.getName() === taskName);
        console.log(index);
        if (index >= 0) {
            this.tasks.splice(index, 1);
            this.tasksUpdated.next([...this.tasks]);
        }
    }
    toggleTaskStatus(taskName: string) {
        let task = this.tasks.find((t) => t.getName() === taskName);
        if (task) {
            task.toggleStatus();
            this.tasksUpdated.next([...this.tasks]);
        }
    }
    updateTask(taskName: string, newName: string) {
        let task = this.tasks.find((t) => t.getName() === taskName);
        if (task) {
            task.setNmame(newName);
            this.tasksUpdated.next([...this.tasks]);
        }
    }
}
