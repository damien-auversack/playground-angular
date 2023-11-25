import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonNavComponent} from "../../ui-kit/button/button-nav/button-nav.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-login',
  standalone: true,
  imports: [CommonModule, ButtonNavComponent, RouterLink],
  templateUrl: './nav-login.component.html',
  styleUrl: './nav-login.component.css'
})
export class NavLoginComponent {
  labelLogin: string = "Login";
  labelInscription: string = "Inscription";
}
