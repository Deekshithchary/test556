import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivillawComponent } from './civillaw.component';

describe('CivillawComponent', () => {
  let component: CivillawComponent;
  let fixture: ComponentFixture<CivillawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivillawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivillawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
