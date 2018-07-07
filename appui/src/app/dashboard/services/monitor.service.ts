import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CpuStatusModel } from 'src/app/dashboard/models/cpu-status-model';

@Injectable()
export class MonitorService {

  public store: CpuStatusModel;
  public cpuLoadHistory: Array<number> = [];
  public freeMemoryHistory: Array<number> = [];
  public totalMemoryHistory: Array<number> = [];
  public timestampHistory: Array<string> = [];

  constructor(private http: HttpClient) {
    this.store = <CpuStatusModel>{};
  }

  public getCpuModel(): Observable<any> {
    return this.http
      .get('http://localhost:8080/api/cpumonitorresource')
      .pipe(map(res => res ));
  }

  public updateHistory(): void {
    this.cpuLoadHistory.push(this.store.cpuLoad);
    this.freeMemoryHistory.push(this.store.totalFreeMemory);
    this.totalMemoryHistory.push(this.store.totalMemory);
    this.timestampHistory.push(this.store.timestamp);
  }
}
