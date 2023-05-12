import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private data = new BehaviorSubject(0);
  currentData = this.data.asObservable();

  
  private paused = new BehaviorSubject(false);
  isPaused = this.paused.asObservable();

  private startCounter = new BehaviorSubject(0);
  startCounterObs = this.startCounter.asObservable();

  private pausedCounter = new BehaviorSubject(0);
  pausedCounterObs = this.pausedCounter.asObservable();

  private map = new Map();

  private audits = new BehaviorSubject(this.map);
  auditsObs = this.audits.asObservable();

  setData(data:any){
    this.data.next(data);
  }

  SetPaused(data:boolean,count: number){
    this.paused.next(data);
    this.pausedCounter.next(count);
  }

  setStartCounter(count:number){
    this.startCounter.next(count);
  }
  setAudits(map: any){
    this.audits.next(map);
  }
  
  constructor() { }
}
