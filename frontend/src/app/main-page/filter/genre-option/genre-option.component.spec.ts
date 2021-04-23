import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreOptionComponent } from './genre-option.component';

describe('GenreOptionComponent', () => {
  let component: GenreOptionComponent;
  let fixture: ComponentFixture<GenreOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreOptionComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
