import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  name: string = ''
  lastname: string = ''
  cpf: string = ''
  phone: string = ''
  street: string = ''
  number: string = ''
  district: string = ''
  city: string = ''
  state: string = ''
  country: string = ''
  username: string = ''
  email: string = ''
  password1: string = ''
  password2: string = ''
  
  
  constructor(
    
  ) { }

  submit(): void {
    console.log(`Name = ${this.name}`)
    console.log(`Last Name = ${this.lastname}`)    
    console.log(`Cpf = ${this.cpf}`)
    console.log(`Phone = ${this.phone}`)
    console.log(`Street = ${this.street}`)
    console.log(`Number = ${this.number}`)
    console.log(`District = ${this.district}`)
    console.log(`City = ${this.city}`)
    console.log(`State = ${this.state}`)
    console.log(`Country = ${this.country}`)
    console.log(`Username = ${this.username}`)
    console.log(`Email = ${this.email}`)
    console.log(`Password1 = ${this.password1}`)
    console.log(`Password2 = ${this.password2}`)
    
    
    
  } 

}
