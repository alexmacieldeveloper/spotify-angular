import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss']
})
export class LeftSideMenuComponent implements OnInit {
  menuSelected = 'Home';

  homeIcon = faHome;
  searchIcon = faSearch;
  artistsIcon = faGuitar;
  playlistIcon = faMusic;
  
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(button: string) {
    this.menuSelected = button;
  }
}
