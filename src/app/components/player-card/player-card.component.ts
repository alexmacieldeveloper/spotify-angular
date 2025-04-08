import { Component, OnDestroy, OnInit } from '@angular/core';
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/Common/factories';
import { IMusic } from 'src/app/interfaces/IMusic';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  music: IMusic = newMusic();

  prevIcon = faStepBackward;
  nextIcon = faStepForward;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getMusicPlayer();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  getMusicPlayer() {
    const sub = this.playerService.currentMusic.subscribe(music => {
      this.music = music;
    });

    this.subs.push(sub);
  }
}
