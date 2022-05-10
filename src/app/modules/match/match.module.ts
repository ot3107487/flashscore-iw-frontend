import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchItemComponent } from './components/match-item/match-item.component';
import { MatchService } from './services/match.service';



@NgModule({
  declarations: [
    MatchListComponent,
    MatchItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatchListComponent
  ],
  providers:[
    MatchService
  ]
})
export class MatchModule { }
