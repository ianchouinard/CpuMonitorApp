import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RefreshRateComponent } from './refresh-rate.component';
import { FormsModule } from '@angular/forms';

describe('RefreshRateComponent', () => {
  let component: RefreshRateComponent;
  let fixture: ComponentFixture<RefreshRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshRateComponent ],
      providers: [FormsModule,],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a rate value between 1 and 10000', () => {
    const rate:number = component.rate;

    expect(rate).toBeGreaterThan(0);
    expect(rate).toBeLessThanOrEqual(10000);
  });

  it('should emit the value of the rate property', () => {
    const rate:number = component.rate;

    spyOn(component.rateChangeEvent, 'emit');

    component.rateUpdate();
    fixture.detectChanges();

    expect(component.rateChangeEvent.emit).toHaveBeenCalledWith(rate);
  });
});
