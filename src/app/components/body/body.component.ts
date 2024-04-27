import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgOptimizedImage, MainComponent],
  providers: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
