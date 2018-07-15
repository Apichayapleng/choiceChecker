import {Component, OnInit} from '@angular/core';

@Component({
  template: `
    <app-navbar></app-navbar>
    <div class = 'main-content'>
    <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  // selector: 'app-main',
  // templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
