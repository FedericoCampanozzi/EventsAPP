import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventService } from './services/event.service';
import { EventTableComponent } from './components/event-table/event-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EventDetailDialogComponent } from './components/event-detail-dialog/event-detail-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CustomErrorSnackbarComponent } from './components/custom-error-snackbar/custom-error-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventTableComponent,
    EventDetailDialogComponent,
    CustomErrorSnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    FlexLayoutModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [
    EventService,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
