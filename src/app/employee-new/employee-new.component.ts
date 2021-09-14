import { Component, OnInit } from '@angular/core';
//import employees from '../employess';//interface que compartilhava os dados foi trocada por um serviço
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
     name: '',
     salary: 0,
     bonus: 0
  }
 
  //esse atributo recebe a constante de outro arquivo que foi importada acima (possibilitando dois modulos consumirem esses dados)
  //public employees = employees;//o public employees é que esta sendo utilizado no template

  constructor(private employeeService : EmployeeService ) { 
    //irá setar o nome após 3 segundos
    // setTimeout( () => {
    //   this.name = 'Dutra'
    // }, 3000);
  }

  ngOnInit() {
  }

  addEmployee(event){
   const copy = Object.assign({}, this.employee);
   this.employeeService.addEmployee(copy);
  }

}
