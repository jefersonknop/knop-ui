import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadeListComponent } from './localidade-list.component';

describe('LocalidadeListComponent', () => {
  let component: LocalidadeListComponent;
  let fixture: ComponentFixture<LocalidadeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalidadeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
