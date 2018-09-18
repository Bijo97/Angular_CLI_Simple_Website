import {
  Component,
  OnInit
} from '@angular/core';
import {
  Task,
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
  tugas: Task[];
  newTaskName; // for create
  selectedTask; // for update
  newPriority;
  priorityList = this.taskService.getPriorities();
  constructor(private taskService: TasksService) {}

  getTasks(): void {
    this.taskService.getTasks().subscribe(tugas => this.tugas = tugas);
  }
  ngOnInit() {
    this.getTasks();
  }
  onSelect(oldTask: Task) {
    this.selectedTask = oldTask;
  }
  addTask() {
    const newId = this.tugas.length + 1;
    const newTask: Task = {
      id: newId,
      name: this.newTaskName,
      priority: this.newPriority
    };
    // this.tugas.push(newTask);
    this.taskService.createNewTask(newTask);
  }
  deleteTask(index: number) {
    this.tugas.splice(index, 1);
  }

}
