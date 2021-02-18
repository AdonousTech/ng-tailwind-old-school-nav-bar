import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNavBarItemComponent } from './icon-nav-bar-item.component';

describe('IconNavBarItemComponent', () => {
  let component: IconNavBarItemComponent;
  let fixture: ComponentFixture<IconNavBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconNavBarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconNavBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
