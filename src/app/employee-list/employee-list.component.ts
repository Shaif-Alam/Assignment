import { DatePipe } from '@angular/common';
import { NodeJSPathManipulation } from '@angular/compiler-cli/src/ngtsc/file_system/src/node_js_file_system';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[] = [
   
  
    {
      EmployeeID:34,
      FirstName: "Puspa",
      LastName: "Singh",
      Salary: 40000,
      DOB: new Date  ("12/23/1998"),
      Email: "jhonsmith@gmail.com",
      Action: "open"
    },
    {
      EmployeeID:45,
      FirstName: "Raju",
      LastName: "Jhonson",
      Salary: 15000,
      DOB: new Date  ("8/16/1998"),
      Email: "jhonsmith@gmail.com",
      Action: "open"
    },
    {
      EmployeeID:17,
      FirstName: "Anupma",
      LastName: "Reddy",
      Salary: 70000,
      DOB: new Date  ("5/2/2005"),
      Email: "jhonsmith@gmail.com",
      Action: "open"
    },
    {
      EmployeeID:2,
      FirstName: "Jhon",
      LastName: "Smith",
      Salary: 20000,
    DOB: new Date ("4/2/2002"),
      Email: "jhonsmith@gmail.com",
      Action: "open"
    },
   
];
  showEdit:boolean=false;
  currentIndex:any;
  constructor() { }

  ngOnInit(): void {
  }

  EditEmp():void{
    this.showEdit=true;
  }

  UpdateEmp():void{
    this.showEdit=false;
  }

}

