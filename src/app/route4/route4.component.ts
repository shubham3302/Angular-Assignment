import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.css']
})
export class Route4Component {

  studentResult: any;
  headers: any;
  objectKeys: any;
  constructor(private http: HttpClient) {
    this.getStudentResult().subscribe(results => {
      this.studentResult = results
      console.log("result", this.studentResult);
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
