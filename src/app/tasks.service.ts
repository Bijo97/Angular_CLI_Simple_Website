import {
  Injectable
} from '@angular/core';
import {
  Task,
  Tasks,
  priorities
} from './Tasks';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(Tasks);
  }
  getTask() {
    return Task;
  }
  getPriorities() {
    return priorities;
  }
  createNewTask(newTask: Task) {
    Tasks.push(newTask);
  }
  updateTask(newTask: Task) {
    this.Task = newTask;
  }
}
