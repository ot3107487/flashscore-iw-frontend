import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = '/api' //'http://localhost:3000';
  constructor(private http: HttpClient) { }


  getAllLigues() {
    return this.http.get(`${this.url}/League`);
  }

}
