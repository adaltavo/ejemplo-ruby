/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Select2itemComponent } from './select2item.component';

describe('Select2itemComponent', () => {
  let component: Select2itemComponent;
  let fixture: ComponentFixture<Select2itemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select2itemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select2itemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
