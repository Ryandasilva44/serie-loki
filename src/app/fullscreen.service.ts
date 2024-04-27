import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FullscreenService {
  constructor() {}

  // toggleFullscreen(youtubeUrl: string): void {
  //   if (document.fullscreenElement) {
  //     document.exitFullscreen();
  //   } else {
  //     window.open(youtubeUrl, '_blank')?.focus();
  //   }
  // }

  openFullscreen(url: string): void {
    const width = 560;
    const height = 315;
    window.open(url, '_blank', 'width=${width}, height=${height}')?.focus();
  }
}
