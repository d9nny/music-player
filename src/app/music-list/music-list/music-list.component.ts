import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MusicService } from '../../shared/music-service/music.service';
import { SongObject } from '../../shared/interfaces/song-object';

@Component({
    selector: 'app-music-list',
    templateUrl: './music-list.component.html',
    styleUrls: ['./music-list.component.less']
})
export class MusicListComponent implements OnInit {

    private subscription: Subscription;
    private songs: SongObject[];
    private currentSong: SongObject;

    constructor(private musicService: MusicService) {
        this.subscription = this.musicService.getSelectedSong()
            .subscribe((song: SongObject) => {
                this.currentSong = song;
            });
    }

    selectSong(song: SongObject): void {
        this.musicService.selectSong(song);
    }

    ngOnInit() {
        this.musicService.getSongs()
            .subscribe((songs: SongObject[]) => this.songs = songs);
    }

}
