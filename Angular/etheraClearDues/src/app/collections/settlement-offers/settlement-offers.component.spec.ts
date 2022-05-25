import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementOffersComponent } from './settlement-offers.component';

describe('SettlementOffersComponent', () => {
  let component: SettlementOffersComponent;
  let fixture: ComponentFixture<SettlementOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
