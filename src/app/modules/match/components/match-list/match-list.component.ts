import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  @Input() matches: any[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {

  }

}
