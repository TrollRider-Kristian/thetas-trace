import { Component, HostListener } from '@angular/core';
import * as p5 from 'p5';
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";

@Component({
  selector: 'app-canvas-comp',
  templateUrl: './canvas-comp.component.html',
  styleUrls: ['./canvas-comp.component.css']
})
export class CanvasCompComponent {
  canvas: p5;

  constructor() { 
    const sketch = (s) => {
      s.preload = () => {}

      s.setup = () => {
        s.createCanvas(960, 600);
      }

      s.draw = () => {
        s.background(155, 155, 155);
      }
    }
    
    this.canvas = new p5(sketch);
  }

  @HostListener('mouseover') 
  onMouseOverCanvas() {
      let mouseDown: boolean = false;

      this.canvas.draw = () => {
        if(mouseDown) {
          // TODO: better line drawing, import data from other components/directives for drawing here
          this.canvas.point(this.canvas.mouseX, this.canvas.mouseY);
        }
      }

      this.canvas.mousePressed = () => {
        if(this.mousePointerIsInsideBox(this.canvas.mouseX, this.canvas.mouseY, 0, 960, 0, 600)) {
          console.log("x coord: " + this.canvas.mouseX);
          console.log("y coord: " + this.canvas.mouseY);
          mouseDown = true;
        }
      }

      this.canvas.mouseReleased = () => {
        mouseDown = false;
      }
  }

  mousePointerIsInsideBox(mX: number, mY: number, bXstart: number, bXend: number, bYstart: number, bYend: number): boolean {
    let withinXbounds = (mX > bXstart) && (mX < bXend);
    let withinYbounds = (mY > bYstart) && (mY < bYend);
    return (withinXbounds && withinYbounds);
  }

}