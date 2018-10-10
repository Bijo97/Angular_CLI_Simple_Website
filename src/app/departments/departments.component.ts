import {
  Component,
  OnInit
} from '@angular/core';
import {
  department
} from '../department';
import {
  DepartmentsService
} from '../departments.service';
import {
  Employee
} from '../employee';
import {
  EmployeeService
} from '../employee.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit {
  depts: department[];
  dept_name = null;
  buildingName;
  selectedDept: department;
  i: number;
  emps: Employee[];
  employeeList: number[];
  key = null;
  findDept: department;

  constructor(private departmentService: DepartmentsService, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getDepartments();
  }

  insert(): void {
    const count = this.depts[this.depts.length - 1].id + 1;
    const dept: department = {
      id: count,
      name: this.dept_name,
      building: this.buildingName,
      employees: this.employeeList
    };
    // this.depts.push(dept);
    this.departmentService.addDepartment(dept);
  }

  show(dept: department, i: number): void {
    this.selectedDept = dept;
    this.i = i;
    this.getEmployees(dept.id);
  }

  update(index: number): void {
    // this.depts[index].dept_name = this.selectedDept.dept_name;
    this.departmentService.updateDepartment(this.selectedDept, index);
    this.selectedDept = null;
  }

  delete(index: number): void {
    if (index !== -1) {
      this.departmentService.deleteDepartment(index);
    }
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(depts => this.depts = depts);
  }

  getEmployees(i: number): void {
    this.employeeService.getEmployeesByDept(i).subscribe(emps => this.emps = emps);
  }

  search(): void {
    this.departmentService.searchDepartment(this.key).subscribe(findDept => this.findDept = findDept);
  }
}
