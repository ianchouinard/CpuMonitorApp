import { Component, OnInit } from '@angular/core';
import { CpuStatusModel } from './../models/cpu-status-model';
import { MonitorService } from './../services/monitor.service';
import { ToGBPipe } from '../../pipes/to-gb.pipe';

@Component({
  selector: 'cpumonitor-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public cpuStatus: CpuStatusModel;
  public ready: boolean;
  public refreshRate: number;

  constructor(
    public monitorService: MonitorService,
    private toGbPipe: ToGBPipe
    ) { 
    this.cpuStatus = <CpuStatusModel>{};
    this.refreshRate = 1500;
  }

  public ngOnInit() {
    this.loadData();
  }

  public usedMemory(): number {
    return this.toGbPipe.transform(this.cpuStatus.totalMemory)
      - this.toGbPipe.transform(this.cpuStatus.totalFreeMemory);
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
