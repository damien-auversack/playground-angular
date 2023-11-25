import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNavigationComponent } from './nav-navigation.component';

describe('NavNavigationComponent', () => {
  let component: NavNavigationComponent;
  let fixture: ComponentFixture<NavNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
