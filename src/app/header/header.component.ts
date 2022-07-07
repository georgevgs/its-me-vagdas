import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  startTime = new Date("April 10, 2013 00:00:000").getTime();
  count$ = interval(30).pipe(
    map(count => Date.now() - this.startTime)
  );

  constructor() { }

  ngOnInit(): void {
  }

}
