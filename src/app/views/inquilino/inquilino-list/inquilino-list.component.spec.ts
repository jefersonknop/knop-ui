import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquilinoListComponent } from './inquilino-list.component';

describe('InquilinoListComponent', () => {
  let component: InquilinoListComponent;
  let fixture: ComponentFixture<InquilinoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquilinoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquilinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
