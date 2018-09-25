import {
  Component,
  OnInit
} from '@angular/core';
import {
  Employees,
  Employee
} from '../employee';
import {
  EmployeeService
} from '../employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  emp_name = null;
  employeesGroup: Employee[];
  emp_address = null;
  selectedEmp: Employee;
  i: number;

  constructor(private employeeService: EmployeeService) {}
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employeesGroup => this.employeesGroup = employeesGroup);
  }
  ngOnInit() {
    this.getEmployees();
  }

  insert(): void {
    const count = this.employeesGroup.length + 1;
    const emp: Employee = {
      id: count,
      emp_name: this.emp_name,
      emp_address: this.emp_address,
      department_id: 1
    };
    // this.employeesGroup.push(emp);
    this.employeeService.createEmployee(emp);
  }

  show(emp: Employee, i: number): void {
    this.selectedEmp = emp;
    this.i = i;
  }

  update(index: number): void {
    this.employeeService.updateEmployee(index, this.selectedEmp.emp_name, this.selectedEmp.emp_address);
    this.selectedEmp = null;
  }

  delete(index: number): void {
    this.employeeService.deleteEmployee(index);
  }

}
