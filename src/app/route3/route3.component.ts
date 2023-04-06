import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css']
})
export class Route3Component {
  interval: any;
  timeLeft: number;
  timerForm: FormGroup;
  startCounter: number = 0;
  pauseCounter: number = 0;
   map = new Map();
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }

  createContactForm() {
    this.timerForm = this.formBuilder.group({
      time: [''],

    });
  }

  startTimer() {
    if (this.timerForm.value.time) {
      this.map.set(new Date(),"Started" );
      this.timeLeft = this.timerForm.value.time;
      this.startCounter++;
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = this.timerForm.value.time;
        }
      }, 1000)
    }
  }

  pauseTimer() {
    if (this.timerForm.value.time) {
      this.pauseCounter++;
      this.map.set( new Date(),"Paused");
      clearInterval(this.interval);
    }
  }

  resetTimer() {
    this.timeLeft = this.timerForm.value.time;
    clearInterval(this.interval);
  }
}
