import { Component, OnDestroy, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/Common/factories';
import { IMusic } from 'src/app/interfaces/IMusic';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  playIcon = faPlay;
  musics: IMusic[] = [];
  currentMusic: IMusic = newMusic();

  subs: Subscription[] = [];

  constructor(private spotifyService: SpotifyService, private playerService: PlayerService) { }


  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.getMusicFromUser();
    this.getCurrentMusic();
  }

  async getMusicFromUser(){
    this.musics = await this.spotifyService.searchMusics();
  }

  getCurrentMusic() {
    const sub = this.playerService.currentMusic.subscribe(music => {
      this.currentMusic = music;
      console.log(this.currentMusic);
    });

    this.subs.push(sub);
  }

  getArtists(music: IMusic) {
    return music.artists.map(artist => artist.name).join(', ');
  }

  async executeMusic(music: IMusic) {
    await this.spotifyService.playMusic(music.id);
    this.playerService.setCurrentMusic(music);
  }
}
