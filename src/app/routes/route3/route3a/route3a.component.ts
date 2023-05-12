import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route3a',
  templateUrl: './route3a.component.html',
  styleUrls: ['./route3a.component.css']
})
export class Route3aComponent implements OnInit , OnDestroy {
  constructor(private sharingService:SharedService){

  }
  ngOnDestroy(): void {
    this.subscriptionPaused.unsubscribe();
    this.subscriptionData.unsubscribe();
  }
  timeLeft: number;
  interval: any;
  subscriptionData: Subscription;
  subscriptionPaused: Subscription;
  ngOnInit() {
    this.subscriptionData=this.sharingService.currentData.subscribe(data => {
      this.startTimer(data);
    });

    this.subscriptionPaused=this.sharingService.isPaused.subscribe(data => {
    
      clearInterval(this.interval);
    });
  }


    startTimer(data: number){
    this.timeLeft=data;
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = data;
        }
      }, 1000)
}
}
