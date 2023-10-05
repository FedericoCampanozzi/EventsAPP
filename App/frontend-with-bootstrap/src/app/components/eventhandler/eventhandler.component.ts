import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventDTO } from '../../interfaces/event.dto';
import { EventTypeDTO } from '../../interfaces/event-type.dto';

@Component({
  selector: 'app-eventhandler',
  templateUrl: './eventhandler.component.html',
  styleUrls: ['./eventhandler.component.scss']
})
export class EventhandlerComponent implements OnInit {

  events: EventDTO[] = [];
  eventsType: EventTypeDTO[] = [];
  eventDetail: EventDTO = new EventDTO();
  newEvent: EventDTO = new EventDTO();

  showAddRow = false;
  showEditEvent = false;
  showUpdateFromDetail = false;
  idxEventToUpdate = -1;

  public constructor(private EventService: EventService) {

  }

  ngOnInit(): void {
    this.EventService.getEvents().subscribe(
      (resp: any) => {
        this.events = resp;
        for(let i=0;i<10;i++) this.events.push(this.events[0]);
      },
      (error) => {
        console.error(error);
      }
    );
    this.EventService.getEventsType().subscribe(
      (resp: any) => {
        this.eventsType = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showAddNewEvent() {
    this.showAddRow = true;
  }

  saveEvent() {
    this.showAddRow = false;
    if(this.newEvent != undefined){
      this.EventService.insertEvent(this.newEvent);
      this.newEvent = new EventDTO();
    }
  }

  cancelAddEvent() {
    this.showAddRow = false;
  }

  showUpdateEvent(idx: number) {
    this.idxEventToUpdate = idx;
    this.newEvent = this.events[idx];
  }

  cancelUpdateEvent() {
    this.idxEventToUpdate = -1;
    this.showUpdateFromDetail = false;
  }

  saveUpdatedEvent(eventID?: number) {
    this.idxEventToUpdate = -1;
    if(this.eventDetail != undefined){
      this.EventService.updateEvent(this.eventDetail);
    }
  }

  showDetail(eventID: number) {
    this.eventDetail = this.events[eventID];
  }

  showModificationMode() {
    this.showUpdateFromDetail = true;
  }

  setData(id:number, event:any){
    switch(id){
      case(1):
        this.newEvent.Title = event.target.value;
      break;
      case(2):
        this.newEvent.ID_Type = event.target.value;
      break;
      case(3):
        this.newEvent.DateEnd = new Date(event.target.value);
      break;
      case(4):
        this.newEvent.DateStart = new Date(event.target.value);
      break;
    }
  }
}
