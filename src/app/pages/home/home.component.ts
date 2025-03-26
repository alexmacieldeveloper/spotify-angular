import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IMusic } from 'src/app/interfaces/IMusic';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playIcon = faPlay;
  musics: IMusic[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.searchMusicFromUser();
  }

  async searchMusicFromUser(){
    this.musics = await this.spotifyService.searchMusics();
    console.log(this.musics)

  }

  getArtists(music: IMusic) {
    return music.artists.map(artist => artist.name).join(', ');
  }

  async executeMusic(music: IMusic) {
    await this.spotifyService.playMusic(music.id);
  }
}
