import {
  Injectable
} from '@angular/core';
import {
  Task,
  // Tasks,
  priorities
} from './Tasks';
import {
  Observable,
  of
} from 'rxjs';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private Tasks: Task[];
  private taskUrl = 'http://i875395.hera.fhict.nl/api/408889/task';
  constructor(private http: HttpClient) {}

  getObservableTask(): Observable < Task[] > {
    // return of(Tasks);
    return this.http.get < Task[] > (this.taskUrl);
  }
  getTasks(): Observable < Task[] > {
    this.getObservableTask().subscribe(Tasks => this.Tasks = Tasks);
    //  return this.http.get<Task[]>(this.taskUrl);
    return of(this.Tasks);

  }
  getPriorities() {
    return priorities;
  }
}
