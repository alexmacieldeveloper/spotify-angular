import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistItemImageComponent } from './artist-item-image.component';

describe('ArtistItemImageComponent', () => {
  let component: ArtistItemImageComponent;
  let fixture: ComponentFixture<ArtistItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistItemImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
