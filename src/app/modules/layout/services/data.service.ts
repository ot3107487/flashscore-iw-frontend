import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllLigues(params: any = {}) {
    let queryString = [];
    if ('count' in params) {
      queryString.push(`_count=${params.count}`);
    }
    if ('page' in params) {
      queryString.push(`_page=${params.page}`);
    }

    return this.http.get(
      `${url}/League${queryString.length ? `?${queryString.join('&')}` : ''}`
    );
  }

  getAllCountries() {
    return this.http.get(`${url}/Country`);
  }
}
