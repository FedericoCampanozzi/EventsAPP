import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomErrorSnackbarComponent } from './custom-error-snackbar.component';

describe('CustomErrorSnackbarComponent', () => {
  let component: CustomErrorSnackbarComponent;
  let fixture: ComponentFixture<CustomErrorSnackbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomErrorSnackbarComponent]
    });
    fixture = TestBed.createComponent(CustomErrorSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
