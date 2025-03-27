import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArtistItemImageComponent } from 'src/app/components/artist-item-image/artist-item-image.component';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';
import { FooterUserComponent } from 'src/app/components/footer-user/footer-user.component';
import { LeftSideMenuComponent } from 'src/app/components/left-side-menu/left-side-menu.component';
import { RecentSearchesComponent } from 'src/app/components/recent-searches/recent-searches.component';
import { RightPanelComponent } from 'src/app/components/right-panel/right-panel.component';
import { TopArtistComponent } from 'src/app/components/top-artist/top-artist.component';
import { TopArtistsComponent } from 'src/app/components/top-artists/top-artists.component';
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
    RightPanelComponent,
    RecentSearchesComponent, 
    TopArtistsComponent,
    ArtistItemImageComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        RouterModule.forChild(PlayerRotas),
    ],
})
export class PlayerModule { }