import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellectuallawComponent } from './intellectuallaw.component';

describe('IntellectuallawComponent', () => {
  let component: IntellectuallawComponent;
  let fixture: ComponentFixture<IntellectuallawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntellectuallawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntellectuallawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
