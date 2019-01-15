import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CpuStatusModel } from './../models/cpu-status-model';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable()
export class MonitorService {

  public store: CpuStatusModel;
  // Histories for chart plotting.
  public cpuLoadHistory: Array<number> = [];
  public freeMemoryHistory: Array<number> = [];
  public totalMemoryHistory: Array<number> = [];
  public timestampHistory: Array<string> = [];

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
    ) {
    this.store = <CpuStatusModel>{};
  }

  public getCpuModel(): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/cpu-stats`)
      .pipe(map(res => res ));
  }

  public updateHistory(): void {
    this.cpuLoadHistory.push(this.store.cpuLoad);
    this.freeMemoryHistory.push(this.store.totalFreeMemory);
    this.totalMemoryHistory.push(this.store.totalMemory);
    this.timestampHistory.push(
      this.datePipe.transform(this.store.timestamp)
    );
  }
  
}
