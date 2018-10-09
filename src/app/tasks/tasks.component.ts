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
import {
  Observable
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map
} from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // initial variables
  public model: any;
  tugas: Task[];
  searchTugas: Task[] = [];
  employeeList: Employee[];
  departments: department[];
  newTaskName; // for create
  searchName;
  newDepartment;
  newEmployee;
  selectedTask; // for update
  newPriority;
  priorityList = this.taskService.getPriorities();

  constructor(private taskService: TasksService,
     private empService: EmployeeService,
      private depService: DepartmentsService,
      ) {}

  getTasks(): void {
    this.taskService.getObservableTask().subscribe(tugas => this.tugas = tugas);
    //  return this.http.get<Task[]>(this.taskUrl);
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
      // priority: this.newPriority,
      depId: this.newDepartment,
      empId: this.newEmployee,
      dueDate: null
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
  searchTask() {
    // let nameRegex;
    this.searchTugas = [];
    for (let i = 0; i < this.tugas.length; i++) {
      // nameRegex = new RegExp(this.tugas[i].name , 'gi');
      // console.log(nameRegex);
        // console.log(this.tugas[i].name + this.searchName.search(this.tugas[i].name));
      if (this.searchName.toLowerCase() === this.tugas[i].name.toLowerCase()) {
        this.searchTugas.push(this.tugas[i]);
      }
    }
  }
  // search = (text$: Observable < string > ) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? [] :
  //       this.tugas.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   )
  //   formatter = (x: {name: string}) => x.name;


}
