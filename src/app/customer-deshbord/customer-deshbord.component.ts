import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/customer.service';

@Component({
  selector: 'app-customer-deshbord',
  templateUrl: './customer-deshbord.component.html',
  styleUrls: ['./customer-deshbord.component.css']
})
export class CustomerDeshbordComponent {

  getCustomer:Customer={};

  constructor(private customer:CustomerService, private activatedRoute: ActivatedRoute,){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.customer.getCustomer(+id).subscribe(data => {
        this.getCustomer = data;
      })
    });
  }

  deposit_amt:any;
  withdraw_amt:any;
  
  deposit(): void{
    if(this.getCustomer.blance){
      this.getCustomer.blance = this.getCustomer.blance + this.deposit_amt;
    }
    this.deposit_amt="";
  }
  withdraw(): void{
    if(this.getCustomer.blance){
      this.getCustomer.blance = this.getCustomer.blance - this.withdraw_amt; 
    }
    this.withdraw_amt="";
  }
}
