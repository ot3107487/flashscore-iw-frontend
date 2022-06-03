import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchItemComponent } from './components/match-item/match-item.component';
import { MatchService } from './services/match.service';
import { MatchViewComponent } from './components/match-view/match-view.component';



@NgModule({
  declarations: [
    MatchListComponent,
    MatchItemComponent,
    MatchViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatchListComponent,
    MatchViewComponent
  ],
  providers:[
    MatchService
  ]
})
export class MatchModule { }
