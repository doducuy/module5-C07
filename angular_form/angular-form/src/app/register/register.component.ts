import {Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User[] = [
    {id: 1
    }
  ];
  formReactive: FormGroup;

  constructor() {
    this.formReactive = new FormGroup(
      {
        id: new FormControl("1",[Validators.required]),
        name: new FormControl("?", [Validators.required]),
        email: new FormControl("?", [Validators.required, Validators.email]),
        password: new FormControl("?", [Validators.required]),
        country: new FormControl("?", [Validators.required]),
        age: new FormControl("?",[Validators.required]),
        gender: new FormControl("?",[Validators.required]),
        phone: new FormControl("",[Validators.required, Validators.pattern(' (84|0[3|5|7|8|9])+([0-9]{8})\\b')] )


      }
    )
    console.log(this.formReactive)
  }

  ngOnInit(): void {
  }

  save() {
    if (this.formReactive.valid){
    }

  }
}
