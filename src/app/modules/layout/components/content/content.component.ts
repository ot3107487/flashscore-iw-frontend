import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/modules/match/services/match.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  matches: any[] = [];
  leagues: any[] = [];
  constructor(private matchService: MatchService ,private dataService : DataService) { }

  ngOnInit(): void {
    
    this.dataService.getAllLigues().subscribe((/*JSON.parse(response.body)*/bundle: any) => {
      this.leagues = bundle.entry.map((entry: any) => entry.resource);
      if(bundle.entry.length>0)
      this.leagues=this.leagues+bundle.entry.map((entry: any) => entry.resource);
    })

    this.matchService.getAllMatches().subscribe((/*JSON.parse(response.body)*/bundle: any) => {
      this.matches = bundle.entry.map((entry: any) => entry.resource);
    })
  }

}
