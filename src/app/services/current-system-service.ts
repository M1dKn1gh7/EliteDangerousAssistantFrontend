import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentSystemService {

  constructor(  private http: HttpClient) { }

  getCurrentSystem() {
    return this.http.get("/api/system_report/get_current_system");
  }
}
