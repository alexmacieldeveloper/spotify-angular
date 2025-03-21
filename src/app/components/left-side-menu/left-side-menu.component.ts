import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(
    private router: Router,
    private spotifyService: SpotifyService ) { }

  ngOnInit(): void {
    this.searchPlaylits();
  }

  buttonClick(button: string) {
    this.menuSelected = button;
    this.router.navigateByUrl('player/home');
  }

  async searchPlaylits() {
    this.playlists = await this.spotifyService.searchPlaylistUser();
  }
}
