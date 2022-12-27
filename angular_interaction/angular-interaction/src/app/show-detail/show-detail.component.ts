import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../model/Student";

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
@Input()
studentCon: Student | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
