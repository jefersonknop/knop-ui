import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportePassageirosComponent } from './transporte-passageiros.component';

describe('TransportePassageirosComponent', () => {
  let component: TransportePassageirosComponent;
  let fixture: ComponentFixture<TransportePassageirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportePassageirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportePassageirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
