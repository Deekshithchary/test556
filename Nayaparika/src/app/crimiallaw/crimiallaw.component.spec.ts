import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimiallawComponent } from './crimiallaw.component';

describe('CrimiallawComponent', () => {
  let component: CrimiallawComponent;
  let fixture: ComponentFixture<CrimiallawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimiallawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimiallawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
