import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.scss']
})

export class MatchViewComponent implements OnInit {

  matchDisplay:any = {};

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
    //src\assets\fcsb.png
  }

  closeView(){
    this.closeViewEmitter.emit();
  }

}
