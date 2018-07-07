import { Component, OnInit } from '@angular/core';
import { CpuStatusModel } from 'src/app/dashboard/models/cpu-status-model';
import { MonitorService } from 'src/app/dashboard/services/monitor.service';

@Component({
  selector: 'cpumonitor-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public cpuStatus: CpuStatusModel;
  public ready: boolean;

  constructor(public monitorService: MonitorService) { 
    this.cpuStatus = <CpuStatusModel>{};
  }

  ngOnInit() {
    this.loadData();
  }

  availableMemory(): number {
    return this.cpuStatus.totalMemoryGB - this.cpuStatus.totalFreeMemoryGB;
  }

  cpuLoad(): string {
    return (this.cpuStatus.cpuLoad * 100).toFixed(2);
  }

  private loadData() {
    let data = null;
    this.monitorService.getCpuModel()
      .subscribe(
        result => (data = result),
        err => {
          console.log(err);
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
    }, 1000);
  }

}
