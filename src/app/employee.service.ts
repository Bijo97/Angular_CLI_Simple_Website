import {
  Injectable
} from '@angular/core';
import {
  Employee,
  Employees
} from './employee';
import {
  Observable,
  of
} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {}
  getEmployees(): Observable < Employee[] > {
    return of(Employees);
  }
  getEmployee(index: number) {
    return Employee[index];
  }
  createEmployee(newEmployee: Employee) {
    Employees.push(newEmployee);
  }
  deleteEmployee(index: number): void {
    if (index !== -1) {
      Employees.splice(index, 1);
    }
  }
  updateEmployee(index: number, newName: string, newAddress: string) {
    Employees[index].emp_name = newName;
    Employees[index].emp_address = newAddress;
  }
}
