import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventDTO } from '../../interfaces/event.dto';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EventDetailDialogComponent } from '../event-detail-dialog/event-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UtilityFunction } from '../../utility-function';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss']
})
export class EventTableComponent implements OnInit, AfterViewInit {
  UtilityFunction: UtilityFunction = new UtilityFunction();

  displayedColumns: string[] = ["ID","Title","TypeName","DateStart","DateEnd","Controls"]
  eventsDataSource = new MatTableDataSource<EventDTO>();
  @ViewChild("eventTablePaginator") paginator?: MatPaginator = undefined;
  
  eventDetail: EventDTO = new EventDTO();
  newEvent: EventDTO = new EventDTO();

  public constructor(
    private EventService: EventService,
    private matDialog: MatDialog
  ) {

  }

  ngAfterViewInit() {
    if(this.paginator != undefined){
      this.eventsDataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
   this.getEventsWithAPI();
  }

  showAddNewEvent() {
    this.matDialog.open(EventDetailDialogComponent, {
      data: {
        Event: new EventDTO(),
        IsAddMode: true
      },
    }).afterClosed()
    .subscribe(()=>{ this.getEventsWithAPI()});
  }

  showDetail(ee: EventDTO) {
    this.matDialog.open(EventDetailDialogComponent, {
      data: {
        Event: EventDTO.copy(ee),
        IsAddMode: false
      },
    }).afterClosed()
    .subscribe(()=>{ this.getEventsWithAPI()});;
  }

  deleteEvent(event: EventDTO){
    this.EventService.deleteEvent(event.id)
    .subscribe(()=>{ this.getEventsWithAPI()});
  }

  private getEventsWithAPI(){
    this.EventService.getEvents().subscribe(
      (resp: any) => {
        this.eventsDataSource.data = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
