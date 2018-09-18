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
  getTask(index: number) {
    return Tasks[index];
  }
  getPriorities() {
    return priorities;
  }
  createNewTask(newTask: Task) {
    Tasks.push(newTask);
  }
  deleteTask(index: number) {
    Tasks.splice(index, 1);
  }
  updateTask(index: number, newName: string, newPrio: string) {
    Tasks[index].name = newName;
    Tasks[index].priority = newPrio;
  }
}
