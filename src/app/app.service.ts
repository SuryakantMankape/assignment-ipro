import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  products: any;
/*   private myData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private removeData: BehaviorSubject<any> = new BehaviorSubject<any>([]); */
  employeeList: any = [];

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): any {

    this.httpClient.get("assets/Photos.json").subscribe(data => {
      console.log(data);
      this.products = data;
    })
    return this.products;

  }
  setEmployee(emp: any) {
    console.log(emp);
    this.employeeList.push(emp);
    
  }
  getData() {
    return this.employeeList;
  }

  removeId(id: any){
    this.employeeList = this.removeEmployee(id);
  }


  removeEmployee(id: any) : any {
    let latestEmployeeList = this.employeeList.filter((ele: any) => ele.id != id);

    return latestEmployeeList;
  }


}