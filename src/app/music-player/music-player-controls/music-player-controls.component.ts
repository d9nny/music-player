import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-music-player-controls',
    templateUrl: './music-player-controls.component.html',
    styleUrls: ['./music-player-controls.component.less']
})
export class MusicPlayerControlsComponent implements OnInit {

    @Input() playing: boolean;

    @Output() next = new EventEmitter();
    @Output() pauseplay = new EventEmitter();
    @Output() previous = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

}
