import { Component, 
         ContentChildren,
         ViewChildren,
         QueryList,
         OnInit,
         OnDestroy } from '@angular/core';
import { IconNavBarItemComponent } from './icon-nav-bar-item/icon-nav-bar-item.component';
import { IconNavBarItemBindingDirective } from './providers/icon-nav-bar-item-binding.directive';
import { Subscription } from 'rxjs';
import { SharedViewportService,
         IViewport } from '../../providers';

@Component({
  selector: 'app-icon-nav-bar',
  templateUrl: './icon-nav-bar.component.html',
  styleUrls: ['./icon-nav-bar.component.css']
})
export class IconNavBarComponent implements OnInit, OnDestroy {

  @ContentChildren(IconNavBarItemBindingDirective) itemBindings: QueryList<IconNavBarItemBindingDirective>;
  @ViewChildren(IconNavBarItemComponent) itemComponents: QueryList<IconNavBarItemComponent>;

  // Internal
  isWeb: boolean;
  isTablet: boolean;
  isHandset: boolean;

  // Subscriptions
  initialViewportSubscription: Subscription;
  viewportSubscription: Subscription;

  constructor(private viewportService: SharedViewportService) { }

  ngOnInit(): void {
    this.implementViewportSubscriptions();
  }

  ngOnDestroy(): void {
    this.removeSubscriptions();
  }

  onChildItemAction(iconId: string) {
    console.log(`Navigation icon with Id ${iconId} was clicked!`);
  }

    /**
   * Start viewport subscriptions.
   * @private
   * @memberof IconNavBarComponent
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
   * @memberof IconNavBarComponent
   */
  private removeSubscriptions() {
    this.initialViewportSubscription.unsubscribe();
    this.viewportSubscription.unsubscribe();
  }

}
