import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';
import { newMusic } from '../Common/factories';
import { IMusic } from '../interfaces/IMusic';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  currentMusic = new BehaviorSubject<IMusic>(newMusic());
  timerId: any = null;

  constructor(private spotifyService: SpotifyService) {
    this.getCurrentMusic();
   }

  async getCurrentMusic() {
    clearTimeout(this.timerId);

    const music = await this.spotifyService.getCurrentMusic();
    this.setCurrentMusic(music);

    this.timerId = setInterval(async () => {
      await this.getCurrentMusic();
    }, 3000)
  }

  setCurrentMusic(music: IMusic){
    this.currentMusic.next(music);
  }
}
