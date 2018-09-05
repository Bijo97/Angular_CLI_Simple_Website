import {
  Component,
  OnInit
} from '@angular/core';
import {
  tasks,
  task,
  priorities
} from '../tasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tugas = tasks;
  priority = priorities;
  constructor() {}
  ngOnInit() {}

  newTaskName;
  newPriority;
  addTask() {
    let newId = this.tugas.length + 1;
    let newTask: task = {
      id: newId,
      name: this.newTaskName,
      priority: this.newPriority
    };
    this.tugas.push(newTask);
  }

}
