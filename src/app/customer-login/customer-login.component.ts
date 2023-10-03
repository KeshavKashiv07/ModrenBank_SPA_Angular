import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from 'src/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
     id:any;
     customer_id:any;

     findCustomer(){
      this.customer_id = this.id;
    }
  
}
