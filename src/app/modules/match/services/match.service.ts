import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/app/utils';
import { MatchItemComponent } from '../components/match-item/match-item.component';
import { MatchListComponent } from '../components/match-list/match-list.component';
import { MatchViewComponent } from '../components/match-view/match-view.component';

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

    if ('include' in params) {
      queryString.push(`_include=${params.include}`);
    }
    if('revinclude' in params) {
      console.log(`${params.revinclude}`);
      queryString.push(`_revinclude=${params.revinclude}`);
    }
    


    return this.http.get(
      `${url}/Match${queryString.length ? `?${queryString.join('&')}` : ''}`
    );
  }
}
