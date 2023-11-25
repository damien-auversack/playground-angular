import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonNavComponent} from "../ui-kit/button/button-nav/button-nav.component";
import {NavNavigationComponent} from "./nav-navigation/nav-navigation.component";
import {NavLoginComponent} from "./nav-login/nav-login.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonNavComponent, NavNavigationComponent, NavLoginComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


}
