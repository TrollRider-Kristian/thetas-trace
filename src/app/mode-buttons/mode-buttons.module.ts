import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawThemeViewComponent } from './draw-theme-view/draw-theme-view.component';

@NgModule({
  declarations: [DrawThemeViewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DrawThemeViewComponent
  ]
})
export class ModeButtonsModule { }
