import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Modelo/customer';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  constructor(private router:Router, private service:ServiceService){}

  customer:Customer = new Customer();

  ngOnInit(): void {
    
  }

  Guardar(): void {
    this.service.createCustomer(this.customer)
    .subscribe(data=>{
      alert("Se agrego con exito");
      this.router.navigate(["listar"]);
    })
  }
}
