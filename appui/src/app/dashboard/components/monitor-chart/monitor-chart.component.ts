import { Component, OnInit, DoCheck, Input, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'cpumonitor-monitor-chart',
  templateUrl: './monitor-chart.component.html',
  styleUrls: ['./monitor-chart.component.scss']
})
export class MonitorChartComponent implements OnInit, DoCheck {

  @Input() totalMemoryData: Array<number>;
  @Input() freeMemoryData: Array<number>;
  @Input() times: Array<string>;

  @ViewChild('chartDiv') chartDiv: ElementRef;

  public chartObject: any;

  constructor() { }

  public ngOnInit() {
    const ctx = this.chartDiv.nativeElement;
    this.chartObject = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.times,
        datasets: [
          { 
            data: this.freeMemoryData,
            label: "Free Memory",
            borderColor: "#3e95cd",
            fill: true,
            backgroundColor: "rgba(62, 149, 205, 0.7)"
          }, { 
            data: this.totalMemoryData,
            label: "Total Memory",
            borderColor: "#8e5ea2",
            fill: true,
            backgroundColor: "rgba(142, 94, 162, 0.5)"
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        elements: { point: { radius: 0 } },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                      return Math.ceil(value / 1073741824) + ' GB';
                    }
                }
            }]
        }
    }
    });
  }

  public ngDoCheck() {
    this.chartObject.update();
  }

}
