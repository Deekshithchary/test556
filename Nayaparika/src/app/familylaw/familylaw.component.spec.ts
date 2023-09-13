import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilylawComponent } from './familylaw.component';

describe('FamilylawComponent', () => {
  let component: FamilylawComponent;
  let fixture: ComponentFixture<FamilylawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilylawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilylawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
