import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cpumonitor-refresh-rate',
  templateUrl: './refresh-rate.component.html',
  styleUrls: ['./refresh-rate.component.scss']
})
export class RefreshRateComponent {

  @Input() rate: number;
  @Output() rateChangeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { 
    this.rate = 2000;
  }

  public rateUpdate() {
    this.rateChangeEvent.emit(this.rate);
  }

}
