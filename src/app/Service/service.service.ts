import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Modelo/customer';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/customers';

  getCustomers(){
    return this.http.get<Customer[]>(this.url);
  }

  createCustomer(customer:Customer){
    return this.http.post<Customer>(this.url, customer);
  }

  getCustomerId(id:number){
    return this.http.get<Customer>(this.url+"/"+id)
  }

  updateCustomer(customer:Customer){
    return this.http.put<Customer>(this.url+"/"+customer.customer_id, customer);
  }

  deleteCustomer(customer:Customer){
    return this.http.delete<Customer>(this.url+"/"+customer.customer_id);
  }
}
