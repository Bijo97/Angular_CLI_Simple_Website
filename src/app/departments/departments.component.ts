import { Component, OnInit } from '@angular/core';
import {departments,department} from '../department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  depts=departments;
  constructor() { }

  ngOnInit() {
  }

}
