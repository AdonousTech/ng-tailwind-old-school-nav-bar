import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
  } from '@angular/animations';

export const EntryAnimationOne =
  trigger('ActivateEntryAnimationOne', [
      transition('void => true', [
        animate(300, keyframes([
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

    export const FadeInBasic =
    trigger('ActivateFadeInBasic', [
        transition('void => true', [
          animate(300, keyframes([
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