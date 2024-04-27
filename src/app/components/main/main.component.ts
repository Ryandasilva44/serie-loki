import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MarqueeComponent } from '../../marquee/marquee.component';




@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgOptimizedImage, MarqueeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
