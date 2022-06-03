import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.scss']
})

export class MatchViewComponent implements OnInit {

  matchDisplay:any = {};
  events:any = [];

  @Input() match: any;
  @Output() closeViewEmitter = new EventEmitter();

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchDisplay.home = `${this.match.home.display.split('|')[0]}`;
    this.matchDisplay.away = `${this.match.away.display.split('|')[0]}`;
    this.matchDisplay.homeSign = `${this.match.home.display.split('|')[1]}`;
    this.matchDisplay.awaySign = `${this.match.away.display.split('|')[1]}`;
    console.log(this.matchDisplay.homeSign);
    console.log(this.matchDisplay.awaySign);
    this.events=this.match.events;
    console.log(this.events);
    //src\assets\fcsb.png
  }

  closeView(){
    this.closeViewEmitter.emit();
  }

  isForHomeTeam(event: any){
    return event.player.team.reference.split('/')[1]===this.match.home.reference.split('/')[1];
  }

  isForAwayTeam(event: any){
    return event.player.team.reference.split('/')[1]!==this.match.home.reference.split('/')[1];
  }



}
