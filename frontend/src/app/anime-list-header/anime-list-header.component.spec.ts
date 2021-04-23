import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeListHeaderComponent } from './anime-list-header.component';

describe('AnimeListHeaderComponent', () => {
  let component: AnimeListHeaderComponent;
  let fixture: ComponentFixture<AnimeListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
