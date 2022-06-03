import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/modules/match/services/match.service';
import { DataService } from '../../../layout/services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  leagueData: any[] = [];
  matchToDisplay: any;
  displayMatch=0;
  displayList=1;

  constructor(
    private matchService: MatchService,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadLeagues(1, 50);
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }

  loadLeagues(page: number, count: number): void {
    this.dataService
      .getAllLigues({ page: page, count: count })
      .subscribe((/*JSON.parse(response.body)*/ bundle: any) => {
        console.log(bundle);
        let newLeagues = bundle.entry.map((entry: any) => ({
          league: entry.resource,
          matches: [],
          showMatches: true
        }));

        for (let league of newLeagues) {
          const date = new Date();
          date.setHours(0, 0, 0, 0);
          this.loadMatches(1, 10, league, date);
        }

        this.leagueData.push(...newLeagues);

        if (this.leagueData.length >= bundle.total) return;

        this.loadLeagues(page + 1, count);
      });
  }

  loadMatches(page: number, count: number, league: any, date: Date) {
    this.matchService
      .getMatches({
        league: league.league.id,
        page: page,
        count: count,
        date: date.toISOString(),
        revinclude: 'match_event'
      })
      .subscribe((/*JSON.parse(response.body)*/ bundle: any) => {
        league.matches.push(
          ...bundle.entry.map((entry: any) => entry.resource).filter((entry: any) => entry.resourceType==='Match')
        );
        if (league.matches.length >= bundle.total) return;
        this.loadMatches(page + 1, count, league, date);
      });
  }

  expand(league: any){
    league.showMatches=!league.showMatches
  }

  displayListMatchSwitch(){
    [this.displayList, this.displayMatch] = [this.displayMatch, this.displayList];
  }

  selectMatchToDisplay(match: any){
    this.matchToDisplay=match;
    console.log(match);
  }
}
