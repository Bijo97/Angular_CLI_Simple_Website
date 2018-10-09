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
  selectedTask;
  selectedDept;
  selectedEmp;
  constructor(private taskService: TasksService, private empService: EmployeeService, private depService: DepartmentsService) {}

  getTasks(): void {
    this.taskService.getObservableTask().subscribe(tugas => this.tugas = tugas);
  }
  getEmployees(): void {
    this.empService.getEmployees().subscribe(employeeList => this.employeeList = employeeList);
  }
  getDepartments(): void {
    this.depService.getDepartments().subscribe(departmentList => this.departments = departmentList);
  }
  onSelectTask(oldTask: Task) {
    this.selectedEmp = null;
    this.selectedDept = null;
    this.selectedTask = oldTask;
  }
  onSelectEmp(oldEmp: Employee) {
    this.selectedDept = null;
    this.selectedTask = null;
    this.selectedEmp = oldEmp;
  }
  onSelectDept(oldDept: department) {
    this.selectedTask = null;
    this.selectedEmp = null;
    this.selectedDept = oldDept;
  }
  getDepartmentName(depId: number) {
    if (depId !== null) {
      return this.departments[depId - 1].dept_name;
    } else {
      return 'No Department assigned';
    } // return tempEmp.eame;
  }
  getEmployeeName(empId: number) {
   if (empId !== null) {
    return this.employeeList[empId - 1].emp_name;
   } else {
     return 'no employees assigned'; // return tempEmp.eame;
  }
}

  ngOnInit() {
    this.getTasks();
    this.getEmployees();
    this.getDepartments();
  }

}
