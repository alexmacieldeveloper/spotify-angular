import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from 'src/app/services/spotify.service';
import { IPlaylist } from './../../interfaces/IPlaylist';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss']
})
export class LeftSideMenuComponent implements OnInit {
  menuSelected = 'Home';

  playlists: IPlaylist[] = [];

  homeIcon = faHome;
  searchIcon = faSearch;
  artistsIcon = faGuitar;
  playlistIcon = faMusic;
  
  constructor(private spotifyService: SpotifyService ) { }

  ngOnInit(): void {
    this.searchPlaylits();
  }

  buttonClick(button: string) {
    this.menuSelected = button;
  }

  async searchPlaylits() {
    this.playlists = await this.spotifyService.searchPlaylistUser();
  }
}
