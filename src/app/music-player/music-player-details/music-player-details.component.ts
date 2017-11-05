import { Component, OnInit, Input } from '@angular/core';

import { MusicService } from '../../shared/music-service/music.service';
import { SongObject } from '../../shared/interfaces/song-object';

@Component({
    selector: 'app-music-player-details',
    templateUrl: './music-player-details.component.html',
    styleUrls: ['./music-player-details.component.less']
})
export class MusicPlayerDetailsComponent implements OnInit {

    @Input() song: SongObject;
    @Input() elapsedTime: number;

    constructor(private musicService: MusicService) {}

    formatTime(time): string {
        return this.musicService.formatTime(time);
    }

    calculateProgress(): number {
        return this.elapsedTime / this.song['duration'] * 100;
    }

    calculateTimeRemaining(): number {
        return this.song['duration'] - this.elapsedTime;
    }

    ngOnInit() {
    }

}
