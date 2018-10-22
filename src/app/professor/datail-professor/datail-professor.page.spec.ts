import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailProfessorPage } from './datail-professor.page';

describe('DatailProfessorPage', () => {
  let component: DatailProfessorPage;
  let fixture: ComponentFixture<DatailProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatailProfessorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
