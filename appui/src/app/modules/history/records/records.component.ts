import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { HistoryRecords } from '../models/history-records.model';
import { ToGBPipe } from '../../pipes/to-gb.pipe';

@Component({
  selector: 'cpumonitor-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  public records: HistoryRecords;

  constructor(
    private historyService: HistoryService,
    private toGbPipe: ToGBPipe
    ) {
    this.records = <HistoryRecords>{};
  }

  ngOnInit() {
    this.getHistoryRecords();
  }

  getHistoryRecords() {
    let data;

    this.historyService.getRecordStats()
      .subscribe(
        result => (data = result),
        err => {
          // handled by intercepter
        },
        () => {
          this.records = data;
        }
      );
  }

  public availableMemory(): number {
    return this.toGbPipe.transform(this.records.maxTotalMemory)
      - this.toGbPipe.transform(this.records.maxTotalFreeMemory);
  }

}
