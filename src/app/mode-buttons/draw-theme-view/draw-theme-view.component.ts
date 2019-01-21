import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw-theme-view',
  templateUrl: './draw-theme-view.component.html',
  styleUrls: ['./draw-theme-view.component.css']
})
export class DrawThemeViewComponent implements OnInit {
  typeofDrawing = 'creature';

  constructor() { }

  ngOnInit() {
  }

  changeDrawingType(newDrawingType: string){
    this.typeofDrawing = newDrawingType;
  }

}
