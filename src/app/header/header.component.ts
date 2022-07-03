import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  startTime =  new Date("April 10, 2013 00:00:00");
  startTimeMS = this.startTime.getTime();
  elapsedTime = Date.now() - this.startTimeMS;
  count$ = interval().pipe(
    map(count => count + this.elapsedTime)
  );

  constructor() { }

  ngOnInit(): void {
  }

}
