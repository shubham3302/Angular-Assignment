import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route3d',
  templateUrl: './route3d.component.html',
  styleUrls: ['./route3d.component.css']
})
export class Route3dComponent implements OnInit, OnDestroy{
  map = new Map();
  subscription: Subscription;
  constructor(private sharedService: SharedService){}
  ngOnInit(): void {
    this.subscription = this.sharedService.auditsObs.subscribe(data =>
      this.map=data);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
