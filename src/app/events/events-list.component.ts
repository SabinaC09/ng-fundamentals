import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "../shared/event.service";

declare let toastr: any
@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class="row">
    <div class="col-md-5"
    *ngFor="let event of events">
    <event-thumbnail
    (click)="handleThumbnailClick(event.name)"
    [event]="event"></event-thumbnail>
    </div>
    </div>
</div>
`
    //templateUrl:'./events-list.component.html'
    //template variables 
    // <event-thumbnail #thumbnail 
    // <h3>{{thumbnail.someProperty}}</h3>
    //<button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
})

export class EventsListComponent implements OnInit {
    events: any;
    constructor(private eventService: EventService, private toastr: ToastrService) {

    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName: any) {
        this.toastr.success(eventName);
    }
}