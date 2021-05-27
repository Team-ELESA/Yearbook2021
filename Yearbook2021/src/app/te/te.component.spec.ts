import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TEComponent } from './te.component';

describe('TEComponent', () => {
  let component: TEComponent;
  let fixture: ComponentFixture<TEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
