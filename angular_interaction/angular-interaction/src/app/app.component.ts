import {Component, Input, OnInit} from '@angular/core';
import {Student} from "./model/Student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-interaction';
students: Student[]=[{
  name:"Vinh",
  gender:1,
  point: 10
},{
  name:"Uy",
  gender:0,
  point: 9
}]
  studentDetail: Student|undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  showDetail(item: Student) {
    this.studentDetail = item;
  }

  getNewStudent($event: Student) {
    this.students.unshift($event);
  }
}
