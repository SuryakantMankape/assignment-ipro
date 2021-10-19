import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  employeeList: any = [];

  constructor(
    private employeeService: EmployeeService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    /* this.httpClient.get("assets/photos.json").subscribe((data: any) =>{
      //  console.log(data);
        this.employeeList = data;
        console.log(this.employeeList);
     */

/*     this.employeeService.getData().subscribe((data) => {
      console.log(data);
      this.employeeList = this.employeeList.push(data);
    });

    this.employeeService.getRemoveId().subscribe((data) => {
      console.log(data);
      this.employeeList = this.removeEmployee(data);
    }); */

    this.employeeList = this.employeeService.getData();
    console.log(this.employeeList);
  }


}
