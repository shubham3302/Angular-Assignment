import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-route3b',
  templateUrl: './route3b.component.html',
  styleUrls: ['./route3b.component.css']
})
export class Route3bComponent {
  timerForm: FormGroup;
  interval: any;
  timeLeft: number;
  
  startCounter: number = 0;
  pauseCounter: number = 0;
   map = new Map();

  constructor(private formBuilder: FormBuilder,private sharedService: SharedService) {
    this.createContactForm();
  }

  createContactForm() {
    this.timerForm = this.formBuilder.group({
      time: [''],

    });
  }

  startTimer() {
    
    if (this.timerForm.value.time) {
    this.sharedService.setData(this.timerForm.value.time);
    this.sharedService.setStartCounter(++this.startCounter);
      this.map.set(new Date(),"Started" );
      this.sharedService.setAudits(this.map);
    }
  }

  pauseTimer() {
    if (this.timerForm.value.time) {
      this.sharedService.SetPaused(true,++this.pauseCounter);
      this.map.set( new Date(),"Paused");
      this.sharedService.setAudits(this.map);
    }
  }

  resetTimer() {
    if (this.timerForm.value.time) {
      this.sharedService.setData(this.timerForm.value.time);
    }
  }

}
