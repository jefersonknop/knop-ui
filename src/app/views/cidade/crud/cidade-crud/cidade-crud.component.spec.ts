import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeCrudComponent } from './cidade-crud.component';

describe('CidadeCrudComponent', () => {
  let component: CidadeCrudComponent;
  let fixture: ComponentFixture<CidadeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
