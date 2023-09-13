import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatelawComponent } from './corporatelaw.component';

describe('CorporatelawComponent', () => {
  let component: CorporatelawComponent;
  let fixture: ComponentFixture<CorporatelawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatelawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporatelawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
