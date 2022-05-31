import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { LeagueComponent } from './components/league/league.component';

const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'League/:id', component: LeagueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }