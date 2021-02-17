import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedScrollingDispatcherService extends Subject<number> {

  constructor() {
    super()
  }

  /**
   * Emits scroll position globally.
   * @param {number} scrollPosition
   * @memberof SharedScrollingDispatcherService
   */
  emitScrollPosition(scrollPosition: number): void {
    super.next(scrollPosition);
  }

}
