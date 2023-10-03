import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './app/models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers_url : string = "http://localhost:3000/customers";

  constructor(private http : HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customers_url);
  }

  getCustomer(id?:number) : Observable<Customer> {
    return this.http.get<Customer>(`${this.customers_url}/${id}`);
  }

  AddCustomer(customer?:Customer) : Observable<Customer> {
    return this.http.post<Customer>(this.customers_url,customer)
  } 
}

