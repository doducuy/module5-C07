import {Component, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../model/student";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: Student | null | undefined;
  formReactive: FormGroup | undefined;
  mess?:string;

  constructor(private _studentService: StudentService, private activatedRouter: ActivatedRoute, private _router: Router) {
    activatedRouter.paramMap.subscribe(data => {
      const idEdit = data.get("id");
      if (idEdit != null) {
        this._studentService.findById(parseInt(idEdit)).subscribe(data => {
          this.student = data;
          this.formReactive = new FormGroup({
            id: new FormControl(this.student?.id),
            name: new FormControl(this.student?.name),
            gender: new FormControl(this.student?.gender)
          })
        })
      }
    })
  }

  ngOnInit(): void {
  }

  saveEditStudent() {
    this._studentService.saveEditStudent(this.formReactive?.value).subscribe(data => {
      this._router.navigateByUrl("/");
      this._studentService.setMess("Edit thành công");
    })
  }
}
