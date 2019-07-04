import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCrudComponent } from './estado-crud.component';

describe('EstadoCrudComponent', () => {
  let component: EstadoCrudComponent;
  let fixture: ComponentFixture<EstadoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
