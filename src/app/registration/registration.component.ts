import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Input {
  type:string,
  name:string,
  class:string,
  placeholder:string,
  value:string,
}
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  inputs:Input[] = [
    {
      type:"pseudo",
      name:"pseudo",
      class:"pseudoInput",
      placeholder:"Pseudo",
      value:"",
    },
    {
      type:"email",
      name:"email",
      class:"emailInput",
      placeholder:"E-Mail",
      value:"",
    },
    {
      type:"password",
      name:"password",
      class:"passwordInput",
      placeholder:"Password",
      value:"",
    },
    {
      type:"password",
      name:"password",
      class:"passwordInput",
      placeholder:"Confirm Password",
      value:"",
    },
    {
      type:"button",
      name:"register",
      class:"loginInput",
      placeholder:"",
      value:"Inscription",
    },
  ];
}
