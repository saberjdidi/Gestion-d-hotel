import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreReserverComponent } from './chambre-reserver.component';

describe('ChambreReserverComponent', () => {
  let component: ChambreReserverComponent;
  let fixture: ComponentFixture<ChambreReserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChambreReserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChambreReserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
