import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedialawComponent } from './medialaw.component';

describe('MedialawComponent', () => {
  let component: MedialawComponent;
  let fixture: ComponentFixture<MedialawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedialawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedialawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
