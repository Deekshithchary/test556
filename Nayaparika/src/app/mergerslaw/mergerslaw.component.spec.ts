import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergerslawComponent } from './mergerslaw.component';

describe('MergerslawComponent', () => {
  let component: MergerslawComponent;
  let fixture: ComponentFixture<MergerslawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergerslawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergerslawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
