import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  @Input() matches: any[] = [];
  @Output() matchOutput = new EventEmitter();
  match: any;

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
  }

  selectMatch(match: any){
    this.match=match;
    this.matchOutput.emit(this.match);
  }

  getMatch(){
    return this.match;
  }

}
