import { Component, Input } from '@angular/core';

@Component({
  selector: 'cpumonitor-stat-item',
  templateUrl: './stat-item.component.html',
  styleUrls: ['./stat-item.component.scss']
})
export class StatItemComponent {

  @Input() label: string;
  @Input() value: string;
  @Input() unit: string;
  @Input() color: string;

}
