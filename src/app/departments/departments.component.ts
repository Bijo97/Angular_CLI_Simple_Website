import {
  Component,
  OnInit
} from '@angular/core';
import { department } from '../department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit {
  depts: department[];
  dept_name = null;
  selectedDept: department;
  i: number;

  constructor(private departmentService: DepartmentsService) {}

  ngOnInit() {
    this.getDepartments();
  }

  insert(): void {
    const count = this.depts.length + 1;
    const dept: department = {
      id: count,
      dept_name: this.dept_name
    };
    // this.depts.push(dept);
    this.departmentService.addDepartment(dept);
  }

  show(dept: department, i: number): void {
    this.selectedDept = dept;
    this.i = i;
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

  getDepartments(): void{
    this.departmentService.getDepartments().subscribe(depts => this.depts = depts)
  }
}
