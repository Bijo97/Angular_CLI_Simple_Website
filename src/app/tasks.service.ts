import {
  Injectable
} from '@angular/core';
import {
  task,
  tasks,
  priorities
} from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {}

  getTasks(): task[] {
    return tasks;
  }
  getTask() {
    return task;
  }
  getPriorities() {
    return priorities;
  }
}
