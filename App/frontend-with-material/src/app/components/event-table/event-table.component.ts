import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventDTO } from '../../interfaces/event.dto';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  @ViewChild(MatSort) sort?: MatSort = undefined;
  
  eventDetail: EventDTO = new EventDTO();
  newEvent: EventDTO = new EventDTO();

  public constructor(
    private EventService: EventService,
    private _liveAnnouncer: LiveAnnouncer,
    private _snackBar: MatSnackBar,
    private matDialog: MatDialog
  ) {

  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngAfterViewInit() {
    if(this.sort != undefined && this.paginator != undefined){
      this.eventsDataSource.sort = this.sort;
      this.eventsDataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.EventService.getEvents().subscribe(
      (resp: any) => {
        this.eventsDataSource.data = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showAddNewEvent() {
    this.matDialog.open(EventDetailDialogComponent, {
      data: {
        Event: new EventDTO(),
        IsAddMode: true
      },
    });
  }

  showDetail(ee: EventDTO) {
    this.matDialog.open(EventDetailDialogComponent, {
      data: {
        Event: EventDTO.copy(ee),
        IsAddMode: false
      },
    });
  }

  deleteEvent(event: EventDTO){
    this.EventService.deleteEvent(event.ID).subscribe(()=>{
      this.EventService.getEvents().subscribe(
        (resp: any) => {
          this.eventsDataSource.data = resp;
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }
}
