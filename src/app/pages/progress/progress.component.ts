import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  porcentajeAzul = 20;
  porcentajeVerde = 50;
  constructor() { }

  ngOnInit() {
  }
}
