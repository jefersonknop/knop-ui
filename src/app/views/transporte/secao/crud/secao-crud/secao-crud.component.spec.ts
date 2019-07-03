import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoCrudComponent } from './secao-crud.component';

describe('SecaoCrudComponent', () => {
  let component: SecaoCrudComponent;
  let fixture: ComponentFixture<SecaoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
