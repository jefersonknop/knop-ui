import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadeCrudComponent } from './localidade-crud.component';

describe('LocalidadeCrudComponent', () => {
  let component: LocalidadeCrudComponent;
  let fixture: ComponentFixture<LocalidadeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalidadeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
