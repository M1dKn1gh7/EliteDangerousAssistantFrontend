import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentSystemService {

  starImageUrl = 'https://www.edsm.net/img/bodies/stars/2.png';

  constructor(  private http: HttpClient) { }

  getStarImage(spectralId: number) {
    //call webservice here (or server to call websercvie
    return this.http.get(this.starImageUrl);
  }
}
