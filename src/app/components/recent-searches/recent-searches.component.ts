import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss']
})
export class RecentSearchesComponent implements OnInit {

  searchesRecent = [
    'Top Brasil', 'Top Global', 'Esquenta Sertanejo',
    'Funk Hits', 'Pagodeira'
  ]

  searchField = '';

  constructor() { }

  ngOnInit(): void {
  }

  defineSearch(search: string){
    this.searchField = search;
  }

  search(){
    console.log('Buscando...', this.searchField);
  }

}