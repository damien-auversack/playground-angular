import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:3000/user";

  constructor(private httpClient:HttpClient) { }

  get() {
    return this.httpClient.get(this.url);
  }

}
