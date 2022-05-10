import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/modules/match/services/match.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  matches: any[] = [];
  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe((/*JSON.parse(response.body)*/bundle: any) => {
      this.matches = bundle.entry.map((entry: any) => entry.resource);
    })
  }

}
