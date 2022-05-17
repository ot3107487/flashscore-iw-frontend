import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.scss'],
})
export class MatchItemComponent implements OnInit {
  @Input() match: any;

  matchDisplay:any = {};

  constructor() {}

  ngOnInit(): void {
    this.matchDisplay.home = `${this.match.home.display.split('|')[0]}`;
    this.matchDisplay.away = `${this.match.away.display.split('|')[0]}`;
  }
}
