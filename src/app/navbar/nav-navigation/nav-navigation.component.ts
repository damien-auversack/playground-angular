import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonNavComponent} from "../../ui-kit/button/button-nav/button-nav.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-navigation',
  standalone: true,
  imports: [CommonModule, ButtonNavComponent, RouterLink],
  templateUrl: './nav-navigation.component.html',
  styleUrl: './nav-navigation.component.css'
})
export class NavNavigationComponent {
  labelHome: string = "Home";
  labelContact: string = "Contact";

}
