import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChambreReserverComponent } from './add-chambre-reserver.component';

describe('AddChambreReserverComponent', () => {
  let component: AddChambreReserverComponent;
  let fixture: ComponentFixture<AddChambreReserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChambreReserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChambreReserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
