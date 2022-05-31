import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout.component';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
      {path: '', loadChildren: () => import('../league/league.module').then(m => m.LeagueModule)}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }