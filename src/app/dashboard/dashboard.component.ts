import {
  Component,
  OnInit
} from '@angular/core';
import {
  Task,
} from '../tasks';
import {
  Employee
} from '../employee';
import {
  department
} from '../department';
import {
  TasksService
} from '../tasks.service';
import {
  DepartmentsService
} from '../departments.service';
import {
  EmployeeService
} from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tugas: Task[];
  employeeList: Employee[];
  departments: department[];
  constructor(private taskService: TasksService, private empService: EmployeeService, private depService: DepartmentsService) {}

  getTasks(): void {
    this.taskService.getTasks().subscribe(tugas => this.tugas = tugas);
  }
  getEmployees(): void {
    this.empService.getEmployees().subscribe(employeeList => this.employeeList = employeeList);
  }
  getDepartments(): void {
    this.depService.getDepartments().subscribe(departmentList => this.departments = departmentList);
  }

  ngOnInit() {
    this.getTasks();
    this.getEmployees();
    this.getDepartments();
  }

}
