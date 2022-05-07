import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  leagues: any[] = [];
  countries: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllLigues().subscribe((/*JSON.parse(response.body)*/bundle: any) => {
      this.leagues = bundle.entry.map((entry: any) => entry.resource);
    })
    this.dataService.getAllCountries().subscribe((/*JSON.parse(response.body)*/bundle: any) => {
      this.countries = bundle.entry.map((entry: any) => entry.resource);
    })
  }

}
