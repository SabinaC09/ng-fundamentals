import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/event.model";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";

declare let toastr: any
@Component({
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
    events!: IEvent[];
    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        //this.eventService.getEvents().subscribe(events => this.events = events);
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName: any) {
        this.toastr.success(eventName);
    }
}