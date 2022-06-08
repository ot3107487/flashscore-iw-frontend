import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/modules/match/services/match.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  league: any;

  constructor(private route: ActivatedRoute,
              private matchService: MatchService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.league = {
        league: {id: params.get('id')},
        matches: []
      };
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      this.loadMatches(1,10,this.league, date)
    });
  }

  loadMatches(page: number, count: number, league: any, date: Date) {
    this.matchService
      .getMatches({
        league: league.league.id,
        page: page,
        count: count,
        date: date.toISOString(),
        include: 'league',
        revinclude: 'match_event'
      })
      .subscribe((bundle: any) => {
        league.matches.push(
          ...bundle.entry.filter((entry:any) => entry.resource.resourceType === 'Match')
          .map((entry: any) => entry.resource)
        );
        for(let i in league.matches)
        { league.matches[i].events=[];
          league.matches[i].events.push(
            ...bundle.entry
            .map((entry: any) => entry.resource)
            .filter((entry: any) => entry.resourceType==='MatchEvent'&& entry.match.reference.split('/')[1]===league.matches[i].id)
          );
        }
        if (league.matches.length >= bundle.total) {
          this.league.league = bundle.entry.find((entry:any) => entry.resource.resourceType === 'League').resource;
          return;
        };
        this.loadMatches(page + 1, count, league, date);
      });
  }

}
