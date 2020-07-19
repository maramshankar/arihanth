import { Component} from '@angular/core';
import { EmployeeService } from '../empservice/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
  employees:any = [];
  errorMsg:any="";

  constructor(private empService:EmployeeService) {
    empService.getEmployees().subscribe(result => this.employees = result,
                                        error =>this.errorMsg= error );
   }

  

}
