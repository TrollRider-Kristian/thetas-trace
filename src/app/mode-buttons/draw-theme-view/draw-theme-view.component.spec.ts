import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawThemeViewComponent } from './draw-theme-view.component';

describe('DrawThemeViewComponent', () => {
  let component: DrawThemeViewComponent;
  let fixture: ComponentFixture<DrawThemeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawThemeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawThemeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
