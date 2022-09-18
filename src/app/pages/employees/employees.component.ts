import { Component, OnInit } from '@angular/core';
import { EmployeesModel } from 'src/app/Models/employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent {
  employees: EmployeesModel;

  constructor( private _employees: EmployeesService) {

    this._employees.getEmployees()
    .subscribe( ( data : any) =>{
      console.log(data.data)
      this.employees = data.data.employees
    })
  }

}
