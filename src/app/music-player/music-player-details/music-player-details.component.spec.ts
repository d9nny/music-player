import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayerDetailsComponent } from './music-player-details.component';

describe('MusicPlayerDetailsComponent', () => {
  let component: MusicPlayerDetailsComponent;
  let fixture: ComponentFixture<MusicPlayerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPlayerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPlayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
