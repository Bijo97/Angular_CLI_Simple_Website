import {
  Component,
  OnInit
} from '@angular/core';
import {
  departments,
  department
} from '../department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit {
  depts = departments;
  dept_name = null;
  selectedDept: department;
  i: number;

  constructor() {}

  ngOnInit() {}

  insert(): void {
    const count = this.depts.length + 1;
    const dept: department = {
      id: count,
      dept_name: this.dept_name
    };
    this.depts.push(dept);
  }

  show(dept: department, i: number): void {
    this.selectedDept = dept;
    this.i = i;
  }

  update(index: number): void {
    this.depts[index].dept_name = this.selectedDept.dept_name;
    this.selectedDept = null;
  }

  delete(index: number): void {
    if (index !== -1) {
      this.depts.splice(index, 1);
    }
  }
}
