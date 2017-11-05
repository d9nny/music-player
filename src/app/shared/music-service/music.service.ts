import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SongObject } from '../interfaces/song-object';

@Injectable()
export class MusicService {

    private currentSong = new Subject<SongObject>();
    private songs: SongObject[];

    constructor(private http: Http) {
    }

    getSongs(): Observable<SongObject[]> {
        return this.http.get('/assets/data/songs.json')
            .map(res => this.songs = res.json());
    }

    getSelectedSong(): Observable<SongObject> {
        return this.currentSong.asObservable();
    }

    selectFirst(): void {
        this.selectSong(this.songs[0]);
    }

    selectSong(song: SongObject): void {
        this.currentSong.next(song);
    }

    nextSong(song: SongObject): void {
        const i = this.songs.indexOf(song);
        this.selectSong(this.songs[i === this.songs.length - 1 ? 0 : i + 1 ]);
    }

    prevSong(song: SongObject): void {
        const i = this.songs.indexOf(song);
        this.selectSong(this.songs[i === 0 ? this.songs.length - 1 : i - 1 ]);
    }

    formatTime(seconds: any): string {
        let minutes: any = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : '0' + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : '0' + seconds;
        return minutes + ':' + seconds;
    }
}

export interface SongObject {
    
}

