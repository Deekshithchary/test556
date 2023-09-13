import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmigrationlawComponent } from './immigrationlaw.component';

describe('ImmigrationlawComponent', () => {
  let component: ImmigrationlawComponent;
  let fixture: ComponentFixture<ImmigrationlawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmigrationlawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmigrationlawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
