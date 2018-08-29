import { Component, OnInit } from '@angular/core';
import {tasks,task} from '../tasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tugas=tasks;
  constructor() { }

  ngOnInit() {
  }

}
