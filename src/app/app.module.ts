import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MusicListComponent } from './music-list/music-list/music-list.component';
import { MusicListItemComponent } from './music-list/music-list-item/music-list-item.component';

import { MusicPlayerComponent } from './music-player/music-player/music-player.component';
import { MusicPlayerControlsComponent } from './music-player/music-player-controls/music-player-controls.component';
import { MusicPlayerDetailsComponent } from './music-player/music-player-details/music-player-details.component';

import { MusicService, SongObject } from './shared/music-service/music.service';

@NgModule({
    declarations: [
        AppComponent,
        MusicListComponent,
        MusicListItemComponent,
        MusicPlayerComponent,
        MusicPlayerControlsComponent,
        MusicPlayerDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule
    ],
    providers: [
        MusicService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
