import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TorrentService {
  private baseUrl = `${environment.apiUrl}:${environment.port}`;

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('torrent', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true
    });

    return this.http.request(req);
  }

  getProgress(torrentId: string): Observable<number> {
    return new Observable<number>((observer) => {
      const eventSource = new EventSource(`${this.baseUrl}/progress/${torrentId}`);

      eventSource.onmessage = (event) => {
        const progress = parseInt(event.data, 10);
        observer.next(progress);

        if (progress >= 100) {
          eventSource.close();
          observer.complete();
        }
      };

      eventSource.onerror = (error) => {
        console.error('Erreur dans EventSource :', error);
        eventSource.close();
        observer.error(error);
      };

      return () => {
        eventSource.close();
      };
    });
  }

  // Méthode pour récupérer la liste des fichiers téléchargés
  getDownloads(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/downloads`);
  }
}
