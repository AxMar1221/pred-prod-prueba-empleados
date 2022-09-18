import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor( private http: HttpClient ) {}

  getEmployees(){
    return this.http.get('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:mario_hernandez');
  }
}
