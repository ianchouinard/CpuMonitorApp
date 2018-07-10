import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MonitorService } from '../services/monitor.service';
import { HttpClient, HttpHandler } from '../../../../node_modules/@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let monitorService: MonitorService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [MonitorService, HttpClient, HttpHandler],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have availableMemory() return a valid number', () => {
    // Should be totalMemoryGB - totalFreeMemoryGB.
    component.cpuStatus.totalMemoryGB = 16;
    component.cpuStatus.totalFreeMemoryGB = 8;

    const output = component.availableMemory();

    expect(output).toEqual(8);
  });

  it('should have cpuLoad() return a valid number as a string', () => {
    // Should be a percent conversion for cpuLoad
    component.cpuStatus.cpuLoad = .25;

    const output = component.cpuLoad();

    expect(output).toEqual("25.00");
  });

  it ('should have updateRefreshRate() update the refresh rate', () => {
    component.updateRefreshRate(7500);

    expect(component.refreshRate).toEqual(7500);
  });
});
