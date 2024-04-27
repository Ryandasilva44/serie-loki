import { Component } from '@angular/core';
import { FullscreenService } from '../fullscreen.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  youtubeUrl = 'https://www.youtube.com/watch?v=xdBWrkcmMwU';

  constructor(private fullscreenservice: FullscreenService) {}
  openFullScreen(): void {
    this.fullscreenservice.openFullscreen(this.youtubeUrl);
  }
}
