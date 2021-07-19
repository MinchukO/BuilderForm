import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss'],
})
export class SpecialComponent implements OnInit {
  specialEvents = [];
  topics = [1, 2, 3, 4];
  text =''
  data = [];

  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this._eventService.getEvents().subscribe(
      (res) => (this.specialEvents = res),
      (err) => console.log(err)
    );
  }

  Handle() {
    this.data.push();
  }
}
