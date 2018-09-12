import {
  Component,
  OnInit
} from '@angular/core';
import {
  task,
  priorities
} from '../tasks';
import {
  TasksService
} from '../tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tugas: task[];
  newTaskName; // for create
  selectedTask; // for update
  newPriority;
  constructor(private taskService: TasksService) {}

  getTasks(): void {
    this.tugas = this.taskService.getTasks();
  }
  ngOnInit() { this.getTasks(); }


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
