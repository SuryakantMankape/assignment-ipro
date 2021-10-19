interface employeeInt {
  id: number;
  albumId : string,
  url : any;
  title : any;
  removeEmp: boolean;
  addEmp: boolean;

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../app.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-photo-compare',
  templateUrl: './photo-compare.component.html',
  styleUrls: ['./photo-compare.component.css']
})



export class PhotoCompareComponent implements OnInit {

  employeelist: employeeInt[] = [];

  constructor(public employeeService: EmployeeService,
              public router: Router,
              public httpClient: HttpClient ){ }


  ngOnInit(): void {

    this.httpClient.get("assets/photos.json").subscribe((data: any) =>{
    //  console.log(data);
      this.employeelist = data;
      this.employeelist.forEach(ele => {
        ele.addEmp = true;
        ele.removeEmp = false;
      }
      );
      console.log(this.employeelist);
     })
    
  }    

  employeeId(employee:any){

    employee.removeEmp = true;  
    employee.addEmp = false;
      this.employeeService.setEmployee(employee);

    }

    employeeRemove(employee: any){
      employee.addEmp = true;
      employee.removeEmp = false;
      this.employeeService.removeId(employee.id);
    }

}
