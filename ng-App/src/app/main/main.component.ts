import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  events = []
  constructor(private _eventService: EventService) {
    setTimeout(() => {
      window.location.href = 'http://localhost:4200/login';
    }, 3000)
  }

  ngOnInit(): void {
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
  }
}
