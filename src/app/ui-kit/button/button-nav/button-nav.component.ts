import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-nav.component.html',
  styleUrl: './button-nav.component.css'
})
export class ButtonNavComponent {

  @Input()
  textContent: string = "";

}
