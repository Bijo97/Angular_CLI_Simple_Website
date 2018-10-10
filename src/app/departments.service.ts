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

  
}
