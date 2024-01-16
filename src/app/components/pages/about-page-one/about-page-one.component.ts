import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page-one',
  templateUrl: './about-page-one.component.html',
  styleUrls: ['./about-page-one.component.scss']
})
export class AboutPageOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // for tab click event
  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
      event.preventDefault();
      this.currentTab = tab;
  }
}
