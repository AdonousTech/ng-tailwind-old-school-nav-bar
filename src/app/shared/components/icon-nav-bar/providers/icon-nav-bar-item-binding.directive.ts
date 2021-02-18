import { Directive,
         Input,
         TemplateRef } from '@angular/core';

@Directive({
  selector: '[appIconNavBarItemBinding]'
})
export class IconNavBarItemBindingDirective {

  @Input() iconText: string;
  @Input() iconId: string;
  @Input() linkRoute: string;
  @Input() icon: TemplateRef<any>;

  constructor() { }

}
