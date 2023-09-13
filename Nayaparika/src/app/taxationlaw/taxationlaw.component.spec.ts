import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxationlawComponent } from './taxationlaw.component';

describe('TaxationlawComponent', () => {
  let component: TaxationlawComponent;
  let fixture: ComponentFixture<TaxationlawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxationlawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxationlawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
