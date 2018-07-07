import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonitorService } from './services/monitor.service';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatButtonModule, MatGridListModule, MatListModule, MatDividerModule, MatSliderModule, MatProgressBarModule } from '@angular/material';
import { StatItemComponent } from './components/stat-item/stat-item.component';
import { MonitorChartComponent } from './components/monitor-chart/monitor-chart.component';
import { CpuChartComponent } from './components/cpu-chart/cpu-chart.component';
import { RefreshRateComponent } from './components/refresh-rate/refresh-rate.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatSliderModule,
    MatProgressBarModule
  ],
  declarations: [DashboardComponent, StatItemComponent, MonitorChartComponent, CpuChartComponent, RefreshRateComponent],
  providers: [MonitorService]
})
export class DashboardModule { }
