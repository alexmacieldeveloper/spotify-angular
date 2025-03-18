import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeftSideMenuComponent } from 'src/app/components/left-side-menu/left-side-menu.component';
import { PlayerComponent } from './player.component';
import { PlayerRotas } from './player.routes';

@NgModule({
    declarations: [
    PlayerComponent,
    LeftSideMenuComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(PlayerRotas),
    ],
})
export class PlayerModule { }