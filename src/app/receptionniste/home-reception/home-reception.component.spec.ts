import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReceptionComponent } from './home-reception.component';

describe('HomeReceptionComponent', () => {
  let component: HomeReceptionComponent;
  let fixture: ComponentFixture<HomeReceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeReceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
