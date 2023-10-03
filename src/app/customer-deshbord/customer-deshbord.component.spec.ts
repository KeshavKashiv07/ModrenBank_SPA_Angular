import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeshbordComponent } from './customer-deshbord.component';

describe('CustomerDeshbordComponent', () => {
  let component: CustomerDeshbordComponent;
  let fixture: ComponentFixture<CustomerDeshbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDeshbordComponent]
    });
    fixture = TestBed.createComponent(CustomerDeshbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
