import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentSystemService {

  constructor(  private http: HttpClient) { }

  getCurrentSystem() {
    return this.http.get("");
  }
}
