import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { demoFunction } from './demo.function';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
})
export class App {
  message: string = '';

  demoFunction('Hello World');
}

bootstrapApplication(App);
