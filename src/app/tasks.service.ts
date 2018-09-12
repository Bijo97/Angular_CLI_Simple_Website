import {
  Injectable
} from '@angular/core';
import {
  task,
  tasks
} from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {}

  getTasks(): task[] {
    return tasks;
  }
}
