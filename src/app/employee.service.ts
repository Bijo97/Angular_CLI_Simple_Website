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
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl = 'http://i875395.hera.fhict.nl/api/408889/employee';
  private employeesGroup: Employee[];
  constructor(private http: HttpClient) {}
  getEmployees(): Observable < Employee[] > {
    // return of(Employees);
  //  this.http.get < Employee[] >(this.employeeUrl).subscribe(employeesGroup => this.employeesGroup = employeesGroup);
  //     return of(this.employeesGroup);
return this.http.get < Employee[] >(this.employeeUrl);

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
  getEmployeesByDept(i: number): Observable < Employee[] > {
    let temp: Employee[] = [];
    for (let emp of Employees) {
      if (emp.department_id == i) {
        temp.push(emp);
      }
    }
    return of(temp);
  }
}
