import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSubmitComponent } from './on-submit.component';

describe('OnSubmitComponent', () => {
  let component: OnSubmitComponent;
  let fixture: ComponentFixture<OnSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
