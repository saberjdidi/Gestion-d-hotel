import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFactureChefComponent } from './add-facture-chef.component';

describe('AddFactureChefComponent', () => {
  let component: AddFactureChefComponent;
  let fixture: ComponentFixture<AddFactureChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFactureChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFactureChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
