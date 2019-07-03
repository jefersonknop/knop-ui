import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaCrudComponent } from './linha-crud.component';

describe('LinhaCrudComponent', () => {
  let component: LinhaCrudComponent;
  let fixture: ComponentFixture<LinhaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
