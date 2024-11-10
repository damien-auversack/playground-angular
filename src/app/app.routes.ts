import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { MainComponent } from "./main/main.component";
import { AdminComponent } from "./admin/admin.component";
import { ErrorComponent } from "./error/error.component";
import { UploadComponent } from "./upload/upload.component";
import { ProgressComponent } from "./progress/progress.component";
import { DownloadsComponent } from "./downloads/downloads.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'torrent',
    children: [
      { path: '', redirectTo: 'upload', pathMatch: 'full' },
      { path: 'upload', component: UploadComponent },
      { path: 'progress/:id', component: ProgressComponent },
      { path: 'downloads', component: DownloadsComponent },
    ]
  },
  { path: '**', component: ErrorComponent },
];
