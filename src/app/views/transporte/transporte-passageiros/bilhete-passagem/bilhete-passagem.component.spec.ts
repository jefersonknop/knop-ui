import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilhetePassagemComponent } from './bilhete-passagem.component';

describe('BilhetePassagemComponent', () => {
  let component: BilhetePassagemComponent;
  let fixture: ComponentFixture<BilhetePassagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilhetePassagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilhetePassagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
