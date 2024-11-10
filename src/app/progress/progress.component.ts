import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { TorrentService } from "../services/torrent/torrent.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'] // Correction du nom de propriété (styleUrls)
})
export class ProgressComponent implements OnInit, OnDestroy {
  progress = 0;
  torrentId: string | null = null;
  private progressSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private torrentService: TorrentService,
    private router: Router,
    private zone: NgZone // Injection de NgZone pour contrôler la détection de changement
  ) { }

  ngOnInit(): void {
    this.torrentId = this.route.snapshot.paramMap.get('id');

    if (this.torrentId) {
      this.progressSubscription = this.torrentService.getProgress(this.torrentId).subscribe({
        next: (progress) => {
          // Utiliser NgZone pour mettre à jour la variable et assurer la détection de changement
          this.zone.run(() => {
            this.progress = progress;
          });

          console.log(`Progression reçue : ${this.progress}%`);

          if (this.progress >= 100) {
            // Utiliser NgZone pour la navigation afin d'éviter l'avertissement
            this.zone.run(() => {
              setTimeout(() => {
                this.router.navigate(['/torrent/downloads']);
              }, 1000);
            });
          }
        },
        error: (error) => {
          console.error('Erreur lors de la réception des mises à jour de progression :', error);
          alert('Erreur lors de la réception des mises à jour de progression.');
        }
      });
    } else {
      alert('ID du torrent manquant. Redirection vers la page d\'accueil.');
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {
    if (this.progressSubscription) {
      this.progressSubscription.unsubscribe();
    }
  }
}
