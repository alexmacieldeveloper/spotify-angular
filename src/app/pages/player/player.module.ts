import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';
import { FooterUserComponent } from 'src/app/components/footer-user/footer-user.component';
import { LeftSideMenuComponent } from 'src/app/components/left-side-menu/left-side-menu.component';
import { RightPanelComponent } from 'src/app/components/right-panel/right-panel.component';
import { TopArtistComponent } from 'src/app/components/top-artist/top-artist.component';
import { HomeComponent } from '../home/home.component';
import { PlayerComponent } from './player.component';
import { PlayerRotas } from './player.routes';

@NgModule({
    declarations: [
    PlayerComponent,
    LeftSideMenuComponent,
    ButtonMenuComponent,
    FooterUserComponent, 
    HomeComponent,
    TopArtistComponent,
    RightPanelComponent
  ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        RouterModule.forChild(PlayerRotas),
    ],
})
export class PlayerModule { }