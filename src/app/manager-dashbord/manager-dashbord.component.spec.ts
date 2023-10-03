import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashbordComponent } from './manager-dashbord.component';

describe('ManagerDashbordComponent', () => {
  let component: ManagerDashbordComponent;
  let fixture: ComponentFixture<ManagerDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerDashbordComponent]
    });
    fixture = TestBed.createComponent(ManagerDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
