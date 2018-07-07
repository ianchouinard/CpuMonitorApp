import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'cpumonitor-cpu-chart',
  templateUrl: './cpu-chart.component.html',
  styleUrls: ['./cpu-chart.component.scss']
})
export class CpuChartComponent implements OnInit {

  @Input() cpuLoadData: Array<number>;
  @Input() times: Array<string>;

  @ViewChild('cpuChartDiv') cpuChartDiv: ElementRef;

  public chartObject: any;

  constructor() { }

  ngOnInit() {
    const ctx = this.cpuChartDiv.nativeElement;
    this.chartObject = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.times,
        datasets: [
          { 
            data: this.cpuLoadData,
            label: "Cpu Load",
            borderColor: "#3FBF7F",
            fill: true,
            backgroundColor: "rgba(63, 191, 127, 0.7)"
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
                      return (value * 100) + '%';
                    }
                }
            }]
        }
    }
    });
  }

  ngDoCheck() {
    this.chartObject.update();
  }

}
