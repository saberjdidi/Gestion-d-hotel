import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChambreComponent } from './add-chambre.component';

describe('AddChambreComponent', () => {
  let component: AddChambreComponent;
  let fixture: ComponentFixture<AddChambreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChambreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
