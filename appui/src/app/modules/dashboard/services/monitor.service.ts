import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CpuStatusModel } from './../models/cpu-status-model';

@Injectable()
export class MonitorService {

  public store: CpuStatusModel;
  // Histories for chart plotting.
  public cpuLoadHistory: Array<number> = [];
  public freeMemoryHistory: Array<number> = [];
  public totalMemoryHistory: Array<number> = [];
  public timestampHistory: Array<string> = [];

  constructor(private http: HttpClient) {
    this.store = <CpuStatusModel>{};
  }

  public getCpuModel(): Observable<any> {
    // Comment first http call to use java backend if set up
    // Requires Glassfish server or to be run through an ide with glassfish (ex. Netbeans)
    /*
    return this.http
      .get('http://localhost:8080/api/cpumonitorresource')
      .pipe(map(res => res ));
      */
    
     return this.http
      .get('assets/empty.json')
      .pipe(map(res => MonitorService.fakeData() ));
  }

  public updateHistory(): void {
    this.cpuLoadHistory.push(this.store.cpuLoad);
    this.freeMemoryHistory.push(this.store.totalFreeMemory);
    this.totalMemoryHistory.push(this.store.totalMemory);
    this.timestampHistory.push(this.store.timestamp);
  }

  /**
   * Wouldn't normally treat dummy data like this.
   * In this case, I just needed a quick method to return
   * a mock version of what the Java api would return.
   */
  private static fakeData(): CpuStatusModel {
    const data = <CpuStatusModel>{};

    const dt = new Date();

    data.totalMemory = 17130237952; // 16 GB
    data.totalFreeMemory = Math.ceil((Math.random() * (15000000000 - 1000000000) + 1000000000)); // 1GB to ~15GB
    data.totalMemoryGB = 16;
    data.totalFreeMemoryGB = Math.ceil(data.totalFreeMemory / 1073741824);
    data.cpuLoad = (Math.random() * (.50 - .1) + .1); // 10% - 50%
    data.operatingSystem = 'Windows 10';
    data.architecture = 'amd64';
    data.timestamp = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;

    return data;
  }
}
