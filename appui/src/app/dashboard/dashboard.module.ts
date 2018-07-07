import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonitorService } from './services/monitor.service';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatButtonModule, MatGridListModule, MatListModule, MatDividerModule } from '@angular/material';
import { StatItemComponent } from './components/stat-item/stat-item.component';
import { MonitorChartComponent } from './components/monitor-chart/monitor-chart.component';
import { CpuChartComponent } from './components/cpu-chart/cpu-chart.component';

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
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [DashboardComponent, StatItemComponent, MonitorChartComponent, CpuChartComponent],
  providers: [MonitorService]
})
export class DashboardModule { }
