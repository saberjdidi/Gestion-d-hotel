import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMaitreComponent } from './home-maitre.component';

describe('HomeMaitreComponent', () => {
  let component: HomeMaitreComponent;
  let fixture: ComponentFixture<HomeMaitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMaitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMaitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
