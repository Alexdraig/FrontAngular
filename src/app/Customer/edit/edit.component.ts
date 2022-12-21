import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Modelo/customer';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  constructor(private service:ServiceService, private router:Router){}
  customer:Customer = new Customer();

  ngOnInit(): void {
    this.Editar();
  }

  Editar(): void{
    let id = localStorage.getItem("id");
    this.service.getCustomerId(Number(id))
    .subscribe(data=>{
      this.customer=data;
    })
  }

  Actualizar(): void{
    this.service.updateCustomer(this.customer)
    .subscribe(data=>{
      this.customer=data;
      alert("Se actualizo con exito");
      this.router.navigate(["listar"]);
    })
  }
}
