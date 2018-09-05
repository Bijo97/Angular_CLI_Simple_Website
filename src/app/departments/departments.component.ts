import { Component, OnInit } from '@angular/core';
import {departments,department} from '../department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit {
  depts=departments;
  dept_name = null;
  selectedDept: department;

  constructor() { }

  ngOnInit() {
  }

  insert(){
  	let count = this.depts.length + 1;
  	let dept: department = {
  		id: count,
  		dept_name: this.dept_name
  	};
  	this.depts.push(dept);
  }

  show(dept:department):void{
    this.selectedDept=dept;
  }
}
