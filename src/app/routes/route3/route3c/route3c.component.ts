import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route3c',
  templateUrl: './route3c.component.html',
  styleUrls: ['./route3c.component.css']
})
export class Route3cComponent implements OnInit, OnDestroy {
  startCounter: number = 0;
  pauseCounter: number = 0;

  constructor(private sharedService: SharedService){
    
  }

  ngOnDestroy(): void {
    this.subscriptionPaused.unsubscribe();
    this.subscriptionStart.unsubscribe();
  }
  timeLeft: number;
  interval: any;
  subscriptionPaused: Subscription;
  subscriptionStart: Subscription;
  ngOnInit() {
    this.subscriptionPaused=this.sharedService.pausedCounterObs.subscribe(data => {
      this.pauseCounter=data;
    });

    this.subscriptionStart=this.sharedService.startCounterObs.subscribe(data => {
      this.startCounter=data;
    });

    
  }
}
