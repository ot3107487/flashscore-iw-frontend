import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.scss'],
})
export class MatchItemComponent implements OnInit {
  @Input() match: any;

  matchDisplay:any = {};
  scoreHomeTeam:number=0;
  scoreAwayTeam:number=0;

  constructor() {}

  ngOnInit(): void {
    this.matchDisplay.home = `${this.match.home.display.split('|')[0]}`;
    this.matchDisplay.away = `${this.match.away.display.split('|')[0]}`;
    console.log(this.match.events);
    this.scoreHomeTeam=this.match.events.filter((event:any) => (event.player.team.reference.split('/')[1]===this.match.home.reference.split('/')[1] && event.code.display==='goal' )).length
    this.scoreAwayTeam=this.match.events.filter((event:any) => (event.player.team.reference.split('/')[1]===this.match.away.reference.split('/')[1] && event.code.display==='goal' )).length
  }
}
