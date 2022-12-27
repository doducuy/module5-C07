import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  birthday = new Date('2022-12-26');
  toggle: boolean = true;
  format(){
    return this.toggle?'shortDate':'fullDate';
  }
  toggleFormat(){
    this.toggle= !this.toggle;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
