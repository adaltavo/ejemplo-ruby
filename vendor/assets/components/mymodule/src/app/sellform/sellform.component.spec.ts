/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellformComponent } from './sellform.component';

describe('SellformComponent', () => {
  let component: SellformComponent;
  let fixture: ComponentFixture<SellformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
