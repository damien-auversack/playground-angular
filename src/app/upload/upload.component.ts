import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TorrentService} from "../services/torrent/torrent.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpEvent, HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  selectedFile: File | null = null;
  isSubmitting = false;

  constructor(private torrentService: TorrentService, private router: Router) { }

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
    } else {
      this.selectedFile = null;
    }
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      return;
    }

    this.isSubmitting = true;

    this.torrentService.uploadFile(this.selectedFile).subscribe({
      next: (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Response) {
          const torrentId = event.body.torrentId;
          // Naviguer vers la page de progression avec l'ID du torrent
          this.router.navigate(['/torrent/progress', torrentId]);
        }
      },
      error: (error) => {
        console.error('Erreur lors de l\'envoi du fichier :', error);
        alert("Erreur réseau ou réponse inattendue.");
        this.isSubmitting = false;
      }
    });
  }
}
