import { Component,
         OnInit,
         AfterViewInit,
         ViewChild, 
         NgZone,
         ChangeDetectorRef } from '@angular/core';
import { ScrollDispatcher, 
        CdkScrollable,
        ViewportRuler } from '@angular/cdk/scrolling';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, 
         Router, 
         RouterOutlet,
         NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { IViewport,
         SharedScrollingDispatcherService,
         SharedErrorDisplayService,
         SharedViewportService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav') public sidenav: MatSidenav | undefined;

  title = 'Old School NavBar Demo with TailWindCSS and Angular - Adonous Tech LLC';
  hasGlobalError: boolean | undefined;
  globalError: string | undefined;
  isWeb: boolean | undefined;
  isTablet: boolean | undefined;
  isHandset: boolean | undefined;

  // subscriptions
  initialViewportSubscription: Subscription | undefined;
  viewportSubscription: Subscription | undefined;
  scrollSubscription: Subscription |  undefined;
  errorDisplaySubscription: Subscription | undefined;
  routerEventsSubscription: Subscription | undefined;

  constructor(private scrollService: SharedScrollingDispatcherService,
              private viewportService: SharedViewportService,
              private errorDisplayService: SharedErrorDisplayService,
              private route: ActivatedRoute,
              private router: Router,
              private _ngZone: NgZone,
              private cd: ChangeDetectorRef,
              private scroll: ScrollDispatcher) {
      this.setActiveNav(); //dev
  }

  ngOnInit():void {
  }

  ngAfterViewInit(): void {
    this.implementViewportSubscriptions();
    this.implementGlobalScrollSubscription();
    this.implementErrorDisplaySubscription();
    this.implementRouteEventsSubscription();
  }

  /**
   * TODO::// build this out
   * @memberof AppComponent
   */
  setActiveNav() {
    console.log(this.router.url)
    this.router.events.subscribe((event) => {
      event instanceof NavigationEnd ? console.log(event): null
    })
  }


  /**
   * Toggle side navigation display
   * @memberof AppComponent
   */
  handleSidenavDisplay() {
    this.sidenav ? this.isWeb ? this.sidenav.opened = !this.sidenav.opened
                       : this.sidenav.opened ? this.sidenav.close() : this.sidenav.open() : null;
  }


  /**
   * Implement the viewport subscriptions
   * @private
   * @memberof AppComponent
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

    // Call for immediate result. Initial viewport is set after this call
    // If not isWeb, close the sidenav and set the sidenav mode to 'over'
    this.viewportService.emitInitialViewportStatus(); // call for immediate result
    if (!this.isWeb && this.sidenav) {
      this.sidenav.close();
      this.sidenav.mode = 'over';
      this.cd.detectChanges();
    }

    // dynamic viewport subscription
    this.viewportSubscription = this.viewportService
    .subscribe({ next: ((iViewport: IViewport) => {
      this.isWeb = iViewport.isWeb;
      this.isTablet = iViewport.isTablet;
      this.isHandset = iViewport.isHandset;

      this.observeViewport();
    })}); 
  }


  /**
   * Subscribes to error display service to simplify error
   * reporting/display throughout the entire application.
   * @private
   * @memberof AppComponent
   */
  private implementErrorDisplaySubscription() {
    // error display subscription
    this.errorDisplaySubscription = this.errorDisplayService.errorSource$
      .subscribe(
        {
          next: ((error: string) => {
            this.hasGlobalError = true;
            this.globalError = error;
          })
        }
      )
  }


  /**
   * Continuously emits the scroll position of the SPA. This is facilitated via
   * the SharedScrollingDispatcherService singleton. Callers consume the scrollTop
   * value directly by subscribing to the service.
   * @private
   * @memberof AppComponent
   */
  private implementGlobalScrollSubscription() {
    this.scrollSubscription = this.scroll.scrolled()
    .subscribe({
      next: ((data: CdkScrollable | void) => {
        //console.log('scrolled :: ', data);
        let scrollTop: number;
        data ? scrollTop = data.getElementRef().nativeElement.scrollTop : 0;

        // use ngZone run to get back into the Angular zone after getting the scroll subscription
        // emits values. See https://material.angular.io/cdk/scrolling/api
        this._ngZone.run(() => {
          this.scrollService.emitScrollPosition(scrollTop);
        })
      }),
      error: ((error) => {})
    }) 
  }


  /**
   * If the app is in a global error state on navigation, clear
   * the error state on navigation
   * @private
   * @memberof AppComponent
   */
  private implementRouteEventsSubscription() {
    this.routerEventsSubscription = this.router.events.subscribe(
      {
        next: ((data) => {
          this.hasGlobalError ? this.hasGlobalError = false : null;
        })
      }
    )
  }


  /**
   * Adjust sidenav on specific viewport changes
   * @private
   * @memberof AppComponent
   */
  private observeViewport() {
    if ((this.isHandset || this.isTablet) && this.sidenav) {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    } else {
      this.sidenav ? this.sidenav.opened ? null : this.sidenav.open() : null;
    }

    if (this.isWeb && this.sidenav) {
      this.sidenav.mode = 'side';
      this.sidenav.open();
    }
  }
}
