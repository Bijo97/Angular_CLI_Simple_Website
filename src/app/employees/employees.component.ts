import { Component, OnInit } from '@angular/core';
import{employees,employee} from '../employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeesGroup=employees;
  emp_name = null;
  emp_address = null;
  selectedEmp: employee;
  i: number;

  constructor() { }

  ngOnInit() {
  }

  insert():void{
  	let count = this.employeesGroup.length + 1;
  	let emp: employee = {
  		id: count,
  		emp_name: this.emp_name,
  		emp_address: this.emp_address
  	};
  	this.employeesGroup.push(emp);
  }

  show(emp:employee, i:number):void{
    this.selectedEmp = emp;
    this.i = i;
  }

  update(index:number):void{
  	this.employeesGroup[index].emp_name = this.selectedEmp.emp_name;
  	this.employeesGroup[index].emp_address = this.selectedEmp.emp_address;
  	this.selectedEmp = null;
  }

  delete(index:number):void{
  	if (index != -1){
  		this.employeesGroup.splice(index, 1);
  	}
  }

}
