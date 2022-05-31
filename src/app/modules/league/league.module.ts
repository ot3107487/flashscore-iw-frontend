import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { LeagueRoutingModule } from './league-routing.module';
import { MatchModule } from '../match/match.module';
import { LeagueComponent } from './components/league/league.component';



@NgModule({
  declarations: [
    ContentComponent,
    LeagueComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    MatchModule
  ]
})
export class LeagueModule { }
