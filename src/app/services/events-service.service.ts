import { Injectable } from '@angular/core';
import eventData from '../../assets/json/events.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsServiceService {
  events = eventData;
  filteredEvents = new BehaviorSubject<any>(eventData);
  entryEmitter = new BehaviorSubject<string>('all');
  scheduleEmitter = new BehaviorSubject<string>('all');
  leaveEmitter = new BehaviorSubject<string>('all');
  constructor() {}

  get allEvents() {
    return this.events;
  }
}
