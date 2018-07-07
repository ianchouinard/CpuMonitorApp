import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MonitorService } from './monitor.service';
import { CpuStatusModel } from '../models/cpu-status-model';

describe('MonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonitorService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([MonitorService], (service: MonitorService) => {
    expect(service).toBeTruthy();
  }));

  it('should fetch a cpu-status-model', inject([HttpTestingController, MonitorService], (httpMock: HttpTestingController, service: MonitorService) => {

    service.getCpuModel().subscribe(data => {
      expect(data.cpuLoad).toBeDefined();
      expect(data.operatingSystemVersion).toBeDefined();
      expect(data.totalFreeMemory).toBeDefined();
      expect(data.totalMemory).toBeDefined();
      expect(data.totalFreeMemoryGB).toBeDefined();
      expect(data.totalMemoryGB).toBeDefined();
      expect(data.operatingSystem).toBeDefined();
      expect(data.architecture).toBeDefined();
      expect(data.timestamp).toBeDefined();
    });

    const req = httpMock.expectOne('http://localhost:8080/myapp/cpumonitorresource');
    expect(req.request.method).toEqual('GET');

    const testData:CpuStatusModel = {
      cpuLoad: 0,
      operatingSystemVersion: "10.0",
      totalFreeMemory: 9289121792,
      totalMemory: 17130237952,
      totalFreeMemoryGB: 8,
      totalMemoryGB: 15,
      operatingSystem: "Windows 10",
      architecture: "amd64",
      timestamp: "2018.07.05.19.49.10"
    };

    req.flush(testData);
  }));
});
