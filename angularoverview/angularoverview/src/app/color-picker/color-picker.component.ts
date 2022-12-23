import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  red: any = 0;
  green: any = 0;
  blue: any = 0;
  backGroundColor: any = 'rgb(0,0,0)';

  constructor() {
  }

  ngOnInit(): void {
  }

  setColor() {
    this.backGroundColor = 'rgb(' + this.red + ', ' + this.green + ', ' + this.blue + ')';
  }
}
