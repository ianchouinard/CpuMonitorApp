import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './records/records.component';
import { RouterModule, Routes } from '@angular/router';
import { HistoryService } from './services/history.service';
import { MatCardModule, MatButtonModule, MatGridListModule, MatListModule, MatDividerModule, MatSliderModule, MatProgressBarModule, MatIconModule } from '@angular/material';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { ToGBPipe } from '../pipes/to-gb.pipe';

const historyRoutes: Routes = [
  {
    path: '',
    component: RecordsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(historyRoutes),
    ComponentsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatSliderModule,
    MatIconModule,
    MatProgressBarModule,
    PipesModule
  ],
  declarations: [RecordsComponent],
  providers: [HistoryService, ToGBPipe]
})
export class HistoryModule { }
