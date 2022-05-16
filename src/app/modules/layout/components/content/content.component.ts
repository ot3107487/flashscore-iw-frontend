import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/modules/match/services/match.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  leagueData: any[] = [];

  constructor(
    private matchService: MatchService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService
      .getAllLigues()
      .subscribe((/*JSON.parse(response.body)*/ bundle: any) => {
        console.log(bundle);
        this.leagueData = bundle.entry.map((entry: any) => ({
          league: entry.resource,
          matches: [],
        }));

        for (let league of this.leagueData) {
          this.matchService
            .getMatches({ league: league.league.id })
            .subscribe((/*JSON.parse(response.body)*/ bundle: any) => {
              league.matches = bundle.entry.map((entry: any) => entry.resource);
            });
        }
      });
  }
}
