import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Modelo/customer';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  customers:Customer[] = [];
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void {
    this.service.getCustomers()
    .subscribe(data=>{
      this.customers=data;
    })
  }

  Editar(customer:Customer): void{
    localStorage.setItem("id", customer.customer_id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(customer:Customer): void{
    this.service.deleteCustomer(customer)
    .subscribe(data=>{
      this.customers=this.customers.filter(c=>c!==customer);
      alert("Usuario eliminado");
    })
  }
}
