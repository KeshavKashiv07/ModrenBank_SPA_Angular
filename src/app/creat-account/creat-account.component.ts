import { Component } from '@angular/core';
import { CustomerService } from 'src/customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-creat-account',
  templateUrl: './creat-account.component.html',
  styleUrls: ['./creat-account.component.css']
})
export class CreatAccountComponent {

  customer:Customer={};

  constructor(private customerService:CustomerService){}

  AddCustomer(){
    this.customerService.AddCustomer(this.customer).subscribe({
      next: data=>{
        alert("Account created successfully")
      },
      error: err=>{
        alert("Failure while connecting to server, try again!!")
      }
    })
  }

}
