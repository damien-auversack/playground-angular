import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgFor } from '@angular/common';
import {
  MatAnchor,
  MatButton,
  MatFabAnchor,
  MatFabButton,
  MatIconButton,
  MatMiniFabButton
} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, NgFor, MatFabButton, MatFabAnchor, MatMiniFabButton, MatDivider, MatIcon, MatIconButton, MatAnchor, MatButton, RouterLink],
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent {
  cards = [
    {
      title: 'Titre 1',
      image: 'url_de_l_image_1',
    },
    {
      title: 'Titre 2',
      image: 'url_de_l_image_2',
    },
    // Ajoutez d'autres cartes selon vos besoins
  ];
}
