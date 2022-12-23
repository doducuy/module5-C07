import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent implements OnInit {
  numberOne:number=0;
  numberTwo:number=0;
  result:(number|string)=0;

  constructor() { }

  ngOnInit(): void {
  }

  sum($event: MouseEvent) {
    this.result = parseInt(String(this.numberOne))+parseInt(String(this.numberTwo));
  }

  subtract($event: MouseEvent) {
    this.result = parseInt(String(this.numberOne))-parseInt(String(this.numberTwo));
  }

  multiphie($event: MouseEvent) {
    this.result = parseInt(String(this.numberOne))*parseInt(String(this.numberTwo));
  }

  division($event: MouseEvent) {
    if(this.numberTwo==0){
      this.result ="Số chia k được bằng 0";
    }else {
      this.result = parseInt(String(this.numberOne))/parseInt(String(this.numberTwo));
    }
  }
}
