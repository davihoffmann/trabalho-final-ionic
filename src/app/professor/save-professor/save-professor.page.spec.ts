import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveProfessorPage } from './save-professor.page';

describe('SaveProfessorPage', () => {
  let component: SaveProfessorPage;
  let fixture: ComponentFixture<SaveProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveProfessorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
