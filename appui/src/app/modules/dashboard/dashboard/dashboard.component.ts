import { Component, OnInit } from '@angular/core';
import { CpuStatusModel } from './../models/cpu-status-model';
import { MonitorService } from './../services/monitor.service';

@Component({
  selector: 'cpumonitor-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public cpuStatus: CpuStatusModel;
  public ready: boolean;
  public refreshRate: number;

  constructor(public monitorService: MonitorService) { 
    this.cpuStatus = <CpuStatusModel>{};
    this.refreshRate = 1500;
  }

  public ngOnInit() {
    this.loadData();
  }

  public availableMemory(): number {
    return this.cpuStatus.totalMemoryGB - this.cpuStatus.totalFreeMemoryGB;
  }

  public updateRefreshRate(rate) {
    this.refreshRate = rate;
  }

  private loadData() {
    let data = null;
    this.monitorService.getCpuModel()
      .subscribe(
        result => (data = result),
        err => {
          // handled by intercepter
        },
        () => {
          this.cpuStatus = data;
          this.monitorService.store = data;
          this.monitorService.updateHistory();
          this.ready = true;
          this.rePoll();
        }
      );
  }

  private rePoll() {
    setTimeout(() => {
      this.loadData();
    }, this.refreshRate);
  }

}
