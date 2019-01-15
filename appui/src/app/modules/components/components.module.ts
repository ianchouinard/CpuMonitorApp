import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatItemComponent } from './stat-item/stat-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatItemComponent],
  exports: [StatItemComponent]
})
export class ComponentsModule { }
