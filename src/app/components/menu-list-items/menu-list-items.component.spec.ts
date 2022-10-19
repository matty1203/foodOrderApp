import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListItemsComponent } from './menu-list-items.component';

describe('MenuListItemsComponent', () => {
  let component: MenuListItemsComponent;
  let fixture: ComponentFixture<MenuListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
