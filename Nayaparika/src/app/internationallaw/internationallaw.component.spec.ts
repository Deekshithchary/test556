import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationallawComponent } from './internationallaw.component';

describe('InternationallawComponent', () => {
  let component: InternationallawComponent;
  let fixture: ComponentFixture<InternationallawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationallawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternationallawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
