import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumarightslawComponent } from './humarightslaw.component';

describe('HumarightslawComponent', () => {
  let component: HumarightslawComponent;
  let fixture: ComponentFixture<HumarightslawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumarightslawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumarightslawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
