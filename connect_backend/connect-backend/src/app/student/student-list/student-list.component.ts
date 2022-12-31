import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {Student} from "../model/student";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: Student[]=[];
  mess?:string;

  constructor(private _studentService: StudentService, private activatedRoute: ActivatedRoute) {
    _studentService.getAll().subscribe(data =>{
    this.studentList =data;
    });
    this.mess = _studentService.mess;
  }

  ngOnInit(): void {
  }
}
