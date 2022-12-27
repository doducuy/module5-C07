import {Component, OnInit} from '@angular/core';
import {IRatingUnit} from "./model/IRatingUnit";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-rating-bar';
  ratingUnitList: IRatingUnit[] = [{vote: 1}, {vote: 2}, {vote: 3}, {vote: 4}, {vote: 5}, {vote: 6}, {vote: 7}, {vote: 8}, {vote: 9}, {vote: 10}]

  constructor() {
  }

  value: number = 0;

  ngOnInit(): void {
  }

  changeBackGround(vote: number) {
    this.value = vote;
  }
}
