import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatItemComponent } from './stat-item/stat-item.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [StatItemComponent],
  exports: [StatItemComponent]
})
export class ComponentsModule { }
