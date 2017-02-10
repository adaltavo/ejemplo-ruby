/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemtableComponent } from './itemtable.component';

describe('ItemtableComponent', () => {
  let component: ItemtableComponent;
  let fixture: ComponentFixture<ItemtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
