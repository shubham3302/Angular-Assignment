import { Component } from '@angular/core';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component {
  display=1;
  changeDisplay(mode: number): void {
    this.display = mode;
  }

  data= [{"name":"Product 1","price":1},{"name":"Product 2","price":2},{"name":"Product 3","price":3},{"name":"Product 4","price":4},{"name":"Product 5","price":5},{"name":"Product 6","price":6},{"name":"Product 7","price":7},{"name":"Product 8","price":8},{"name":"Product 9","price":9},{"name":"Product 10","price":10},{"name":"Product 11","price":11},{"name":"Product 12","price":12},
  {"name":"Product 13","price":13},{"name":"Product 14","price":14},{"name":"Product 15","price":15},{"name":"Product 16","price":16}] ;
}
