import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {  InptsComponent } from '../inpts/inpts.component'


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
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  
  
  

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


  showDialog(): void {
    let ref = this.dialog.open(InptsComponent)
  
    ref.componentInstance.name = this.name
    ref.componentInstance.lastname = this.lastname
    ref.componentInstance.cpf = this.cpf
    ref.componentInstance.phone = this.phone
    ref.componentInstance.street = this.street
    ref.componentInstance.number = this.number
    ref.componentInstance.district = this.district
    ref.componentInstance.city = this.city
    ref.componentInstance.state = this.state
    ref.componentInstance.country = this.country
    ref.componentInstance.username = this.username
    ref.componentInstance.email = this.email

  

  
  }

  checkSenha(senha1: any, senha2: any): boolean {

    return !(senha1 == senha2)


  }




}
