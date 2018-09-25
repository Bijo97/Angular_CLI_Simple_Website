import { Injectable } from '@angular/core';
import { department } from './department';
import { departments } from './department';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';
import { Employees } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor() { }

  getDepartments(): Observable<department[]>{
    return of(departments);
  }

  addDepartment(dept: department): void{
    departments.push(dept);
  }

  updateDepartment(dept: department, index: number): void{
    departments[index].dept_name = dept.dept_name;
  }

  deleteDepartment(index: number): void{
    departments.splice(index, 1);
  }

  getEmployees(i: number): Observable<Employee[]>{
    let temp: Employee[];
    for (let emp of Employees){
      if (emp.department_id == index){
        temp.push(emp);
      }
    }

    return of(temp);
  }
}
