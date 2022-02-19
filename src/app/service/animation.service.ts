import { Injectable } from '@angular/core';
declare var anime: any;
@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  public animateTextByCssClass(cssClassName: string): void {
    anime.timeline({loop: false})
      .add({
        targets: '.' + cssClassName,
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 2000,
        delay: (el: any, i: number) => 800 * i
      })
  }
}
