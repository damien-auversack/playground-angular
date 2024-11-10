import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TorrentService} from "../services/torrent/torrent.service";
import {RouterLink} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.css'
})
export class DownloadsComponent implements OnInit{
  downloadedFiles: string[] = [];

  constructor(private torrentService: TorrentService) {}

  ngOnInit(): void {
    this.torrentService.getDownloads().subscribe((files) => {
      this.downloadedFiles = files;
    });
  }

  // Génère l'URL de téléchargement pour chaque fichier
  getFileUrl(file: string): string {
    return  `${environment.apiUrl}:${environment.port}/downloads/${file}`;
  }

  onDeleteFile(filename: string): void {
    this.torrentService.deleteFile(filename).subscribe({
      next: () => {
        console.log('Fichier supprimé avec succès');
        // Mettre à jour la liste des fichiers téléchargés
        this.downloadedFiles = this.downloadedFiles.filter(file => file !== filename);
      },
      error: (error) => {
        console.error('Erreur lors de la suppression du fichier', error);
      },
    });
  }

}
