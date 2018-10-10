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
  NgbModal,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';


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
  closeResult: string;

  constructor(private modalService: NgbModal, private taskService: TasksService, private empService: EmployeeService, 
    private depService: DepartmentsService) {}

  getTasks(): void {
    this.taskService.getObservableTask().subscribe(tugas => this.tugas = tugas);
  }
  getEmployees(): void {
    this.empService.getEmployees().subscribe(employeeList => this.employeeList = employeeList);
  }
  getDepartments(): void {
    this.depService.getDepartments().subscribe(departmentList => this.departments = departmentList);
  }
  onSelectTask(oldTask: Task, detail) {
    this.selectedEmp = null;
    this.selectedDept = null;
    this.selectedTask = oldTask;
    this.open(detail);
  }
  onSelectEmp(oldEmp: Employee, detail) {
    this.selectedDept = null;
    this.selectedTask = null;
    this.selectedEmp = oldEmp;
    this.open(detail);
  }
  onSelectDept(oldDept: department, detail) {
    this.selectedTask = null;
    this.selectedEmp = null;
    this.selectedDept = oldDept;
    this.open(detail);
  }
  // getDepartmentName(depId: number) {
  //   if (depId !== null) {
  //     return this.departments[depId - 1].dept_name;
  //   } else {
  //     return 'No Department assigned';
  //   } // return tempEmp.eame;
  // }
  // getEmployeeName(empId: number) {
  //   if (empId !== null) {
  //     return this.employeeList[empId - 1].emp_name;
  //   } else {
  //     return 'no employees assigned'; // return tempEmp.eame;
  //   }
  // }

  ngOnInit() {
    this.getTasks();
    this.getEmployees();
    this.getDepartments();
  }

  open(detail) {
    this.modalService.open(detail, {
      ariaLabelledBy: 'modal-detail'
    }).result.then((result) => {
      this.closeResult = ``;
    }, (reason) => {
      this.closeResult = ``;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return '';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return '';
    } else {
      return ``;
    }
  }

}
