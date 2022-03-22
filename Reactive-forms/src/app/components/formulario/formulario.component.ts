import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

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
}
