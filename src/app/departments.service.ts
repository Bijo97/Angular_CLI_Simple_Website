import {
  Injectable
} from '@angular/core';
import {
  department
} from './department';
// import {
//   departments
// } from './department';
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
export class DepartmentsService {
  private deptUrl = 'http://i875395.hera.fhict.nl/api/408889/department';

  constructor(private http: HttpClient) {}

  getDepartments(): Observable < department[] > {
    // return of(departments);
    // return of(departments);
    return this.http.get < department[] > (this.deptUrl);

  }

  addDepartment(dept: department): void {
    departments.push(dept);
  }

  updateDepartment(dept: department, index: number): void {
    departments[index].dept_name = dept.dept_name;
  }

  deleteDepartment(index: number): void {
    departments.splice(index, 1);
  }

  getDepartmentById(i: number): Observable < department > {
    for (let dept of departments) {
      if (dept.id == i) {
        return of(dept);
      }
    }
    return null;
  }

  searchDepartment(key: string): Observable < department > {
    for (let dept of departments) {
      if (dept.dept_name == key) {
        return of(dept);
      }
    }
    return null;
  }
}
