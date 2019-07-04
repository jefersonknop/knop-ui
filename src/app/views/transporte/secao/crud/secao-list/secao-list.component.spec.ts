import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoListComponent } from './secao-list.component';

describe('SecaoListComponent', () => {
  let component: SecaoListComponent;
  let fixture: ComponentFixture<SecaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
