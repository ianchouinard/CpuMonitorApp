import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToGBPipe } from './to-gb.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToGBPipe],
  exports: [ToGBPipe]
})
export class PipesModule {
  static forRoot() {
    return {
      ngModule: PipesModule,
      providers: [],
    };
  }
}
