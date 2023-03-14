import { Component, OnInit } from '@angular/core';
import { EventsServiceService } from '../services/events-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  selectedEntry = ['blue', 'yellow'];
  selectedWorking = ['Ewd', 'Wo'];
  selectedLeave = ['leave', 'holiday'];

  constructor(private eventsDataService: EventsServiceService) {}

  ngOnInit(): void {}

  filterBYentries(value: string) {
    if (!this.selectedEntry.includes(value)) {
      this.selectedEntry.push(value);
    } else {
      this.selectedEntry = this.selectedEntry.filter(
        (entry: string) => entry != value
      );
    }
    if (
      this.selectedEntry.includes('blue') &&
      this.selectedEntry.includes('yellow')
    ) {
      this.eventsDataService.entryEmitter.next('all');
    } else if (
      !this.selectedEntry.includes('blue') &&
      this.selectedEntry.includes('yellow')
    ) {
      this.eventsDataService.entryEmitter.next('yellow');
    } else if (
      this.selectedEntry.includes('blue') &&
      !this.selectedEntry.includes('yellow')
    ) {
      this.eventsDataService.entryEmitter.next('blue');
    } else {
      this.eventsDataService.entryEmitter.next('');
    }
  }

  filterByLeaves(value: string) {
    if (!this.selectedLeave.includes(value)) {
      this.selectedLeave.push(value);
    } else {
      this.selectedLeave = this.selectedLeave.filter(
        (entry: string) => entry != value
      );
    }

    if (
      this.selectedLeave.includes('leave') &&
      this.selectedLeave.includes('holiday')
    ) {
      this.eventsDataService.leaveEmitter.next('all');
    } else if (
      !this.selectedLeave.includes('leave') &&
      this.selectedLeave.includes('holiday')
    ) {
      this.eventsDataService.leaveEmitter.next('holiday');
    } else if (
      this.selectedLeave.includes('leave') &&
      !this.selectedLeave.includes('holiday')
    ) {
      this.eventsDataService.leaveEmitter.next('leave');
    } else {
      this.eventsDataService.leaveEmitter.next('');
    }
  }

  filterByWeeks(value: string) {
    if (!this.selectedWorking.includes(value)) {
      this.selectedWorking.push(value);
    } else {
      this.selectedWorking = this.selectedWorking.filter(
        (entry: string) => entry != value
      );
    }

    if (
      this.selectedWorking.includes('Wo') &&
      this.selectedWorking.includes('Ewd')
    ) {
      this.eventsDataService.scheduleEmitter.next('all');
    } else if (
      !this.selectedWorking.includes('Ewd') &&
      this.selectedWorking.includes('Wo')
    ) {
      this.eventsDataService.scheduleEmitter.next('Wo');
    } else if (
      !this.selectedWorking.includes('Wo') &&
      this.selectedWorking.includes('Ewd')
    ) {
      this.eventsDataService.scheduleEmitter.next('Ewd');
    } else {
      this.eventsDataService.scheduleEmitter.next('');
    }
  }
}
