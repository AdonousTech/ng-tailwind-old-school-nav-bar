import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
  } from '@angular/animations';

export const FadeOutUpExit =
  trigger('ActivateFadeOutUpExit', [
      transition('true => void', [
        animate(300, keyframes([
        style({opacity: 1}),
          style({opacity: 0, transform: 'translate3d(0,-100%,0)'}),
        ]))
      ])
    ]);
export const FadeOutRightExit =
trigger('ActivateFadeOutUpExit', [
    transition('true => void', [
      animate(250, keyframes([
      style({opacity: 1}),
        style({opacity: 0, transform: 'translate3d(100%, 0, 0)'}),
      ]))
    ])
  ]);