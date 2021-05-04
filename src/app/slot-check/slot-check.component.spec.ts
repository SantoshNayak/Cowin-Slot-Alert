import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotCheckComponent } from './slot-check.component';

describe('SlotCheckComponent', () => {
  let component: SlotCheckComponent;
  let fixture: ComponentFixture<SlotCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
