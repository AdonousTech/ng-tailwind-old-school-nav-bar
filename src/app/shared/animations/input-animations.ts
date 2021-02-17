import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes,
    AnimationTriggerMetadata
  } from '@angular/animations';

export const InputValidationAnimation: AnimationTriggerMetadata =
    trigger('hasInputError', [
        state('true', style({width: '*'})),
        transition('void => *', [
        animate(300, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3}),
            style({opacity: 1, transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4}),
            style({opacity: 1, transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5}),
            style({opacity: 1, transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65}),
            style({opacity: 1, transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75}),
            style({opacity: 1, transform: 'scale3d(1,1,1)', offset: 1}),
        ]))
        ]),
        transition('* => void', [
        animate(300, keyframes([
            style({opacity: 1, transform: 'scale3d(1,1,1)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(0, 0, 0)', offset: 1}),
        ]))
        ])
  ])