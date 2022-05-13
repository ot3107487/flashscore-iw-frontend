import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }


  getAllMatches() {
    return this.http.get(`${url}/Match`);
  }
  getMatchesByLeague(league:number){
    return this.http.get(`${url}/Match?_league=${league}`);
  }

}
