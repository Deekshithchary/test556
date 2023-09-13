import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanresouceslawComponent } from './humanresouceslaw.component';

describe('HumanresouceslawComponent', () => {
  let component: HumanresouceslawComponent;
  let fixture: ComponentFixture<HumanresouceslawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanresouceslawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanresouceslawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
