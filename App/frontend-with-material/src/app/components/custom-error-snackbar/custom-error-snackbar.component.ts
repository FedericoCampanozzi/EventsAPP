import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-error-snackbar',
  templateUrl: './custom-error-snackbar.component.html',
  styleUrls: ['./custom-error-snackbar.component.scss']
})
export class CustomErrorSnackbarComponent {
  title = "";
  message = "";
  showCloseBtn = false;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
  public snackBar: MatSnackBar) {
    this.title = data.Title;
    this.message = data.Message;
    this.showCloseBtn = data.ShowCloseBtn
  }
}
