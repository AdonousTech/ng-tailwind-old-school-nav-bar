import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
  } from '@angular/animations';

export const ExitEnterIconX =
trigger('AnimateIcon', [
    transition('true => void', [
      animate(400, keyframes([
        style({transform: 'translate3d(0, 0, 0)'}),
        style({transform: 'translate3d(-100%, 0, 0)'})
      ]))
    ]),
    transition('void => true', [
      animate(400, keyframes([
        style({transform: 'translate3d(-100%, 0, 0)'}),
        style({transform: 'translate3d(0, 0, 0)'})
      ]))
    ])
  ]);
  export const FocalCardIconAnimationFade =
trigger('AnimateFocalCardIconFadeInOut', [
    transition('void => true', [
      animate(600, keyframes([
        style({opacity: 0}),
        style({opacity: 1})
      ]))
    ]),
    transition('true => void', [
      animate(200, keyframes([
        style({opacity: 1}),
        style({opacity: 0})
      ]))
    ])
  ]);