import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventhandlerComponent } from './eventhandler.component';

describe('EventhandlerComponent', () => {
  let component: EventhandlerComponent;
  let fixture: ComponentFixture<EventhandlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventhandlerComponent]
    });
    fixture = TestBed.createComponent(EventhandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
