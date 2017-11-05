import { Component, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MusicService } from '../../shared/music-service/music.service';
import { SongObject } from '../../shared/interfaces/song-object';

@Component({
    selector: 'app-music-player',
    templateUrl: './music-player.component.html',
    styleUrls: ['./music-player.component.less']
})
export class MusicPlayerComponent implements OnInit {

    private screenWidth: number;
    private currentSong: SongObject;
    private subscription: Subscription;
    private playing: boolean;
    private elapsedTime: number;
    private timer: any;

    constructor(private musicService: MusicService) {
        this.subscription = this.musicService.getSelectedSong()
            .subscribe((song: SongObject) => {
                this.stopTimer();
                this.currentSong = song;
                this.playing = true;
                this.elapsedTime = 0;
                this.playSong();
            });
    }

    @HostListener('window:resize')
        onWindowResize(): void {
            this.screenWidth = window.screen.width;
        }

    handlePrevious(): void {
        this.musicService.prevSong(this.currentSong);
    }

    handlePauseplay(): void {
        if (!this.currentSong) {
            this.musicService.selectFirst();
            return;
        }
        this.playing = !this.playing;
        this.playing ? this.playSong() : this.stopTimer();
    }

    handleNext(): void {
        this.musicService.nextSong(this.currentSong);
    }

    playSong(): void {
        this.timer = setInterval(() => { this.countTimer(); }, 1000);
    }

    countTimer(): void {
        if (this.elapsedTime < this.currentSong.duration) {
            this.elapsedTime ++;
        } else {
            this.stopTimer();
            this.handleNext();
        }
    }

    stopTimer(): void {
        clearInterval(this.timer);
    }

    ngOnInit() {
        this.screenWidth = window.screen.width;
    }

}
