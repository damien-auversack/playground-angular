import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${environment.apiUrl}:${environment.port}/user`;

  constructor(private httpClient:HttpClient) { }

  get() {
    return this.httpClient.get(this.url);
  }

}
