import { Component, OnInit, Input } from '@angular/core';

import { MusicService } from '../../shared/music-service/music.service';
import { SongObject } from '../../shared/interfaces/song-object';

@Component({
    selector: 'app-music-list-item',
    templateUrl: './music-list-item.component.html',
    styleUrls: ['./music-list-item.component.less']
})
export class MusicListItemComponent implements OnInit {

    @Input() song: SongObject;
    @Input() currentSong: boolean;

    constructor(private musicService: MusicService) { }

    formatTime(time): string {
        return this.musicService.formatTime(time);
    }

    ngOnInit() {
    }

}
