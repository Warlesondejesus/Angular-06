import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {  InptsComponent } from '../inpts/inpts.component'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  implements OnInit {

  personalData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
    street: new FormControl('', [Validators.required, Validators.minLength(3)]),
    number: new FormControl('', [Validators.required, Validators.minLength(3)]),
    district: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    state: new FormControl('', [Validators.required, Validators.minLength(3)]),
    country: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
 

})

submit(): void {

  console.log(`Name = ${this.personalData.controls['name'].value}`);
  console.log(`LastName = ${this.personalData.controls['lastname'].value}`);
  console.log(`CPF = ${this.personalData.controls['cpf'].value}`);
  console.log(`Phone = ${this.personalData.controls['lasphonetname'].value}`);
  console.log(`Street = ${this.personalData.controls['street'].value}`);
  console.log(`Number = ${this.personalData.controls['number'].value}`);
  console.log(`District = ${this.personalData.controls['district'].value}`);
  console.log(`City = ${this.personalData.controls['city'].value}`);
  console.log(`State = ${this.personalData.controls['state'].value}`);
  console.log(`Country = ${this.personalData.controls['country'].value}`);
  console.log(`Username = ${this.personalData.controls['username'].value}`);
  console.log(`Email = ${this.personalData.controls['email'].value}`);
  console.log(`Password = ${this.personalData.controls['password'].value}`);

}

constructor(
  private dialog: MatDialog
) { }

ngOnInit(): void {
}

showDialog(): void {
  let ref = this.dialog.open(InptsComponent)

  ref.componentInstance.name = this.personalData.controls['name'].value
  ref.componentInstance.lastname = this.personalData.controls['lastname'].value
  ref.componentInstance.cpf = this.personalData.controls['cpf'].value
  ref.componentInstance.phone = this.personalData.controls['phone'].value
  ref.componentInstance.street = this.personalData.controls['street'].value
  ref.componentInstance.number = this.personalData.controls['number'].value
  ref.componentInstance.district = this.personalData.controls['district'].value
  ref.componentInstance.city = this.personalData.controls['city'].value
  ref.componentInstance.state = this.personalData.controls['state'].value
  ref.componentInstance.country = this.personalData.controls['country'].value
  ref.componentInstance.username = this.personalData.controls['username'].value
  ref.componentInstance.email = this.personalData.controls['email'].value

}
}
