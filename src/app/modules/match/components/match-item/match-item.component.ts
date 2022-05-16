import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.scss'],
})
export class MatchItemComponent implements OnInit {
  @Input() match: any;

  matchDisplay: string = '';

  constructor() {}

  ngOnInit(): void {
    this.matchDisplay = `${this.match.home.display.split('|')[0]} - ${
      this.match.away.display.split('|')[0]
    }`;
  }
}
