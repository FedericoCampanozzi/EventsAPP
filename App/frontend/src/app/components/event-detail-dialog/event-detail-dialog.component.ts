import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventDTO } from '../../interfaces/event.dto';
import { EventService } from '../../services/event.service';
import { UtilityFunction } from 'src/app/utility-function';
import { EventTypeDTO } from 'src/app/interfaces/event-type.dto';


@Component({
  selector: 'app-event-detail-dialog',
  templateUrl: './event-detail-dialog.component.html',
  styleUrls: ['./event-detail-dialog.component.scss'],
})
export class EventDetailDialogComponent {
  UtilityFunction: UtilityFunction = new UtilityFunction();
  e : EventDTO;
  editMode = false;
  addMode = false;
  eventsType: EventTypeDTO[] = [];

  public constructor (
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<EventDetailDialogComponent>,
    private EventService: EventService) {
    this.e = data.Event;
    this.addMode = data.IsAddMode;    
    this.EventService.getEventsType().subscribe(
      (resp: any) => {        
        if (this.e.ID_Type == -1) this.e.ID_Type = resp[0].ID;
        this.eventsType = resp;
      },
      (error) => {
        console.error(error);
      }
    );    
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  changeMode(save: boolean){
    if(this.addMode){
      if(save){
        this.EventService.insertEvent(this.e)
        .subscribe(() => {});
      }
      this.dialogRef.close(true);
    }
    else {
      if(this.editMode && save){
        this.EventService.updateEvent(this.e)
        .subscribe(() => {});
      }
      this.editMode = !this.editMode;
    }
  }
}
