import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonitorService } from './services/monitor.service';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatButtonModule, MatGridListModule, MatListModule, MatDividerModule, MatSliderModule, MatProgressBarModule } from '@angular/material';
import { MonitorChartComponent } from './components/monitor-chart/monitor-chart.component';
import { CpuChartComponent } from './components/cpu-chart/cpu-chart.component';
import { RefreshRateComponent } from './components/refresh-rate/refresh-rate.component';
import { PipesModule } from '../pipes/pipes.module';
import { ToGBPipe } from '../pipes/to-gb.pipe';
import { ComponentsModule } from '../components/components.module';

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
    ComponentsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatSliderModule,
    MatProgressBarModule,
    PipesModule
  ],
  declarations: [DashboardComponent, MonitorChartComponent, CpuChartComponent, RefreshRateComponent],
  providers: [
    MonitorService,
    DatePipe,
    ToGBPipe
  ]
})
export class DashboardModule { }
