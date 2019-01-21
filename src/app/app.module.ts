import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModeButtonsModule } from './mode-buttons/mode-buttons.module';
import { CanvasCompComponent } from './canvas-comp/canvas-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasCompComponent
  ],
  imports: [
    BrowserModule,
    ModeButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
