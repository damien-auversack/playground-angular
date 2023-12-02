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
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  inputs:Input[] = [
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
      type:"button",
      name:"login",
      class:"loginInput",
      placeholder:"",
      value:"Connexion",
    },
  ];

}
