import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }


  getAllLigues() {
    return this.http.get(`${url}/League`);
  }
  
  getAllCountries() {
    return this.http.get(`${url}/Country`);
  }

}
