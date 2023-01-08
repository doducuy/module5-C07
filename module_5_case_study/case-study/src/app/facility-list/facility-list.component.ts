import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {RentType} from "../model/rentType";
import {FacilityType} from "../model/facilityType";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  rentTypeList: RentType[] = [{
    id: 1,
    name: 'theo ngay'
  }, {
    id: 2,
    name: 'theo thang'
  }];
  facilityTypeList: FacilityType[]=[{
    id: 1,
    name: 'room'
  },{
    id: 2,
    name: 'villa'
  }];
  facilityList: Facility[] = [{
    id: 1,
    name: 'room',
    area: 20,
    cost: 10,
    maxPeople: 10,
    standardRoom: 'aaa',
    rentTypeId: this.rentTypeList[1],
    facilityTypeId:this.facilityTypeList[1],
    descriptionOtherConvenience: 'aa',
    poolArea: 20,
    numberOfFloor: 2,
    facilityFree: 'have tv'
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
