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
  newTaskName; // for create
  selectedTask; // for update
  newPriority;
  constructor() {}
  ngOnInit() {}


  onSelect(oldTask: task) {
    this.selectedTask = oldTask;
  }
  addTask() {
    const newId = this.tugas.length + 1;
    const newTask: task = {
      id: newId,
      name: this.newTaskName,
      priority: this.newPriority
    };
    this.tugas.push(newTask);
  }
  deleteTask(index: number) {
    this.tugas.splice(index, 1);
  }

}
