import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailDialogComponent } from './event-detail-dialog.component';

describe('EventDetailDialogComponent', () => {
  let component: EventDetailDialogComponent;
  let fixture: ComponentFixture<EventDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDetailDialogComponent]
    });
    fixture = TestBed.createComponent(EventDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
