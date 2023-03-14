import { Component, OnInit } from '@angular/core';
import eventData from '../events.json';
import { EventsServiceService } from '../services/events-service.service';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss'],
})
export class EventCalendarComponent implements OnInit {
  events: any = [];
  showEntry: string = 'all';
  showSchedule: string = 'all';
  showLeaves: string = 'all';

  constructor(private eventService: EventsServiceService) {}

  ngOnInit(): void {
    this.eventService.filteredEvents.subscribe(
      (eventsData) => (this.events = eventsData)
    );
    this.eventService.entryEmitter.subscribe(
      (entry: string) => (this.showEntry = entry)
    );
    this.eventService.scheduleEmitter.subscribe(
      (entry: string) => (this.showSchedule = entry)
    );
    this.eventService.leaveEmitter.subscribe(
      (leaves: string) => (this.showLeaves = leaves)
    );
  }
}
