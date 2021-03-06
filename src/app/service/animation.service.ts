import {Injectable} from '@angular/core';

declare var anime: any;

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() {
  }

  public animateTextByCssClass(cssClassName: string): void {
    anime.timeline({loop: false})
      .add({
        targets: '.' + cssClassName,
        scale: [2, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: [1000],
        delay: (el: any, i: number) => 800 * i
      })
  }

  public animateFinalWordByCssClass(cssClassName: string): void {
    anime.timeline({loop: false})
      .add({
        targets: '.' + cssClassName,
        scale: [2, 1],
        rotate: [0, 720],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: [1000],
        delay: (el: any, i: number) => 800 * i
      })
  }

  /* Watch out there is also other css involved in the component */
  public rotateButtonByCssClass(cssClassName: string): void {
    anime.timeline({loop: false})
      .add({
        targets: '.' + cssClassName,
        rotate: [0, 360],
        duration: 3000,
        elasticity: 150,
        easing: 'easeOutElastic',
        delay: (el: any, i: number) => 800 * i
      })

  }
}
