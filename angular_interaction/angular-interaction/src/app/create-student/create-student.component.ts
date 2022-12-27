import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from "../model/Student";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  @Output()
  onCreate = new EventEmitter<Student>()
  student: Student| undefined;

  constructor() { }

  ngOnInit(): void {
  }

  createStudent(name:string, gender:string, point:string) {
    this.student={name:name,gender: parseInt(gender), point: parseInt(point)};
    this.onCreate.emit(this.student);
  }
}
