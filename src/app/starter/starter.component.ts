import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'IT新技术课程项目主页。';
  }

  ngAfterViewInit() {}
}
