import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import { EventDTO } from '../interfaces/event.dto';
import { UtilityFunction } from '../utility-function';
import { EventTypeDTO } from '../interfaces/event-type.dto';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // Backend URI
  private Delete = "api/event/delete";
  private Insert = "api/event/insert";
  private Events = "api/event/get";
  private Update = "api/event/update";
  private EventsType = "api/event-type/get"
  // ****************************************

  url: string = environment.apiURL;

  constructor(
    private httpClient: HttpClient,
    public snackbar: MatSnackBar) { }
  
  private callGetAPI<T>(method: string, params?: string) {
    return UtilityFunction.callGetAPI<T>(this.httpClient, this.snackbar, this.url, method, params);
  }

  private callPostAPI<T>(method: string, jsonParams: string) {
    return UtilityFunction.callPostAPI<T>(this.httpClient, this.snackbar, this.url, method, jsonParams);
  }

  deleteEvent(id: number){
    return this.callGetAPI<boolean>(this.Delete, "id="+id);
  }

  insertEvent(newEvent: EventDTO){
    return this.callPostAPI(this.Insert, JSON.stringify(newEvent));
  }

  getEvents() {
    return this.callGetAPI<EventDTO[]>(this.Events, undefined);
  }

  updateEvent(e: EventDTO){
    return this.callPostAPI(this.Update, JSON.stringify(e))
  }

  getEventsType(){
    return this.callGetAPI<EventTypeDTO[]>(this.EventsType, undefined);
  }
}