import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailComponent } from './eventdetail.component';

describe('EventdetailComponent', () => {
  let component: EventdetailComponent;
  let fixture: ComponentFixture<EventdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventdetailComponent]
    });
    fixture = TestBed.createComponent(EventdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
