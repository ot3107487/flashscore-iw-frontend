import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(private http: HttpClient) {}

  getMatches(params: any) {
    let queryString = [];
    if ('count' in params) {
      queryString.push(`_count=${params.count}`);
    }
    if ('page' in params) {
      queryString.push(`_page=${params.page}`);
    }
    if ('league' in params) {
      queryString.push(`league=${params.league}`);
    }
    if ('date' in params) {
      queryString.push(`date=${params.date}`);
    }

    return this.http.get(
      `${url}/Match${queryString.length ? `?${queryString.join('&')}` : ''}`
    );
  }
}
