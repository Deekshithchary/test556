import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankinglawComponent } from './bankinglaw.component';

describe('BankinglawComponent', () => {
  let component: BankinglawComponent;
  let fixture: ComponentFixture<BankinglawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankinglawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankinglawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
