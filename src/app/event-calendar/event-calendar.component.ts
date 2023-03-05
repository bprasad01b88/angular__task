import { Component } from '@angular/core';
import eventData from '../events.json';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss'],
})
export class EventCalendarComponent {
  events = eventData;
}
