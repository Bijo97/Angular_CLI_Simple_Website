import { Component, OnInit } from '@angular/core';
import{employees,employee} from '../employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeesGroup=employees;
  constructor() { }

  ngOnInit() {
  }

}
