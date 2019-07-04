import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquilinoCrudComponent } from './inquilino-crud.component';

describe('InquilinoCrudComponent', () => {
  let component: InquilinoCrudComponent;
  let fixture: ComponentFixture<InquilinoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquilinoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquilinoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
