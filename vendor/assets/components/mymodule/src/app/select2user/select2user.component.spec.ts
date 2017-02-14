/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Select2userComponent } from './select2user.component';

describe('Select2userComponent', () => {
  let component: Select2userComponent;
  let fixture: ComponentFixture<Select2userComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select2userComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select2userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
