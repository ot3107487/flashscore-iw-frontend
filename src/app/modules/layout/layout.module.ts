import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { MatchListComponent } from '../match/components/match-list/match-list.component';
import { MatchModule } from '../match/match.module';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    SideMenuComponent
  ],
  imports: [
    LayoutRoutingModule,
    HttpClientModule,
    CommonModule,
    MatchModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [DataService]
})
export class LayoutModule { }
