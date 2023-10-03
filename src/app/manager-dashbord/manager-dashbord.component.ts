import { Component } from '@angular/core';
import { CustomerService } from 'src/customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-manager-dashbord',
  templateUrl: './manager-dashbord.component.html',
  styleUrls: ['./manager-dashbord.component.css']
})
export class ManagerDashbordComponent {

  customers : Customer[] = [];

  constructor(private custService : CustomerService){}
  
  ngOnInit(): void {
    this.custService.getAllCustomers().subscribe({
      next: data => {
        this.customers = data;
      },
      error: err => {
        alert("Server error");
      }
    });
  }

}
