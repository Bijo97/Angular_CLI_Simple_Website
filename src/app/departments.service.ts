import { Injectable } from '@angular/core';
import { department } from './department';
import { departments } from './department';
import { Observable, of } from 'rxjs';

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
}
