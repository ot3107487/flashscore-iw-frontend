import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.scss']
})

export class MatchViewComponent implements OnInit {

  matchDisplay:any = {};
  events:any = [];
  scoreHomeTeam:number = 0;
  scoreAwayTeam:number = 0;

  @Input() match: any;
  @Output() closeViewEmitter = new EventEmitter();

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchDisplay.home = `${this.match.home.display.split('|')[0]}`;
    this.matchDisplay.away = `${this.match.away.display.split('|')[0]}`;
    this.matchDisplay.homeSign = `${this.match.home.display.split('|')[1]}`;
    this.matchDisplay.awaySign = `${this.match.away.display.split('|')[1]}`;
    this.match.events=this.match.events.sort((event1:any,event2:any) => {
      if (event1.time > event2.time) {
          return 1;
      }
  
      if (event1.time < event2.time) {
          return -1;
      }
      return 0;
    });
    this.scoreHomeTeam=this.match.events.filter((event:any) => (event.player.team.reference.split('/')[1]===this.match.home.reference.split('/')[1] && event.code.display==='goal' )).length
    this.scoreAwayTeam=this.match.events.filter((event:any) => (event.player.team.reference.split('/')[1]===this.match.away.reference.split('/')[1] && event.code.display==='goal' )).length
  }

  closeView(){
    this.closeViewEmitter.emit();
  }

  isForHomeTeam(event: any){
    return (event.player.team.reference.split('/')[1]===this.match.home.reference.split('/')[1]);
  }

  isForAwayTeam(event: any){
    return (event.player.team.reference.split('/')[1]===this.match.away.reference.split('/')[1]);
  }



}
