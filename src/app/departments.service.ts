import { Injectable } from '@angular/core';
import { department } from './department';
import { departments } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor() { }

  getDepartments(): department[]{
    return departments;
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
