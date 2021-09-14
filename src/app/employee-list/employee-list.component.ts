import { Component, OnInit } from '@angular/core';
//import employees from '../employess';//interface que compartilhava os dados foi trocada por um serviço
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //public employees_ = employees; interface que compartilhava os dados foi trocada por um serviço

  constructor(public employeeService : EmployeeService) { }

  ngOnInit() {
  }

  getSalaryColor(employee){
    return employee.salary > 20000 ? 'green': null;
  }

}
