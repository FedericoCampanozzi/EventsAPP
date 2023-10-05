import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EventDTO } from '../interfaces/event.dto';

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

  constructor(private http: HttpClient) { }
  
  deleteEvent(id: number){
    return this.http.post(`${this.url}/${this.Delete}/${id}`, undefined);
  }

  insertEvent(newEvent: EventDTO){
    return this.http.post(`${this.url}/${this.Insert}`, JSON.stringify(newEvent));
  }

  getEvents() {
    return this.http.get(`${this.url}/${this.Events}`);
  }

  updateEvent(e: EventDTO){
    return this.http.post(`${this.url}/${this.Update}`,JSON.stringify(e))
  }

  getEventsType(){
    return this.http.get(`${this.url}/${this.EventsType}`);
  }
}