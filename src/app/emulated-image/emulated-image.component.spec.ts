import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedImageComponent } from './emulated-image.component';

describe('EmulatedImageComponent', () => {
  let component: EmulatedImageComponent;
  let fixture: ComponentFixture<EmulatedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmulatedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulatedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
