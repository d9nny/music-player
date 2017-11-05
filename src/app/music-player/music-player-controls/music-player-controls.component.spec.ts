import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayerControlsComponent } from './music-player-controls.component';

describe('MusicPlayerControlsComponent', () => {
  let component: MusicPlayerControlsComponent;
  let fixture: ComponentFixture<MusicPlayerControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPlayerControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPlayerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
