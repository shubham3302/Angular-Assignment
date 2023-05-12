import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.css']
})
export class Route4Component implements OnInit, OnDestroy {

  studentResult: any;
  headers: any;
  objectKeys: any;
  subscription: Subscription; 
  constructor(private http: HttpClient) { 
    console.log("constructor");
   }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    console.log("onInit");
    this.subscription=this.getStudentResult().subscribe(results => {
      this.studentResult = results
      this.headers = Object.keys(this.studentResult[0]);
      this.objectKeys = Object.keys;
    });
  }



  getStudentResult() {

    const httpOptions = {
      headers: new HttpHeaders({
        'x-api-key': 'PMAK-642aa7c5647d041389f2d3b3-456d9e9415ef72648779803ab3772c0070'
      })
    };[]
    return this.http.get("https://85512322-1d7b-4b77-8d54-6a0b45b6c36b.mock.pstmn.io/student/result", httpOptions);
  }
}
