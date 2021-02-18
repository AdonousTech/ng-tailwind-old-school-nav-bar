import { Component,
         OnInit,
         Input, 
         OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedViewportService,
         IViewport } from '../../../providers';
import { IconNavBarItemBindingDirective } from '../providers/icon-nav-bar-item-binding.directive';

@Component({
  selector: 'app-icon-nav-bar-item',
  templateUrl: './icon-nav-bar-item.component.html',
  styleUrls: ['./icon-nav-bar-item.component.css']
})
export class IconNavBarItemComponent extends IconNavBarItemBindingDirective implements OnInit, OnDestroy  {

  // Internal
  isWeb: boolean;
  isTablet: boolean;
  isHandset: boolean;

  // Subscriptions
  initialViewportSubscription: Subscription;
  viewportSubscription: Subscription;

  constructor(private viewportService: SharedViewportService) {
    super()
   }

  ngOnInit(): void {
    this.implementViewportSubscriptions();
  }

  ngOnDestroy(): void {
    this.removeSubscriptions();
  }

    /**
   * Start viewport subscriptions.
   * @private
   * @memberof IconNavBarItemComponent
   */
  private implementViewportSubscriptions() {
    // initial viewport subscription
    // includes call to emit the result immediately
    this.initialViewportSubscription = this.viewportService.initialViewportEvalSource$
      .subscribe({ next: ((iViewport: IViewport) => {
        this.isWeb = iViewport.isWeb;
        this.isTablet = iViewport.isTablet;
        this.isHandset = iViewport.isHandset;
      })});
    this.viewportService.emitInitialViewportStatus(); // call for immediate result

    // dynamic viewport subscription
    this.viewportSubscription = this.viewportService
    .subscribe({ next: ((iViewport: IViewport) => {
      this.isWeb = iViewport.isWeb;
      this.isTablet = iViewport.isTablet;
      this.isHandset = iViewport.isHandset;
    })}); 
  }

  /**
   * Remove viewport subscriptions.
   * @private
   * @memberof IconNavBarItemComponent
   */
  private removeSubscriptions() {
    this.initialViewportSubscription.unsubscribe();
    this.viewportSubscription.unsubscribe();
  }

}
