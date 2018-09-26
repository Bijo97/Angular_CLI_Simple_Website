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
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // initial variables
  tugas: Task[];
  employeeList: Employee[];
  departments: department[];
  newTaskName; // for create
  newDepartment;
  newEmployee;
  selectedTask; // for update
  newPriority;
  priorityList = this.taskService.getPriorities();
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
  onSelect(oldTask: Task) {
    this.selectedTask = oldTask;
  }
  addTask() {
    const newId = this.tugas.length + 1;
    const newTask: Task = {
      id: newId,
      name: this.newTaskName,
      priority: this.newPriority,
      depId: this.newDepartment,
      empId: this.newEmployee
    };
    // this.tugas.push(newTask);
    this.taskService.createNewTask(newTask);
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
  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
  updateTask(index: number, newName: string, newPriority: string) {
    this.taskService.updateTask(index, newName, newPriority);
  }

}
