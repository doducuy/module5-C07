import {RentType} from "./rentType";
import {FacilityType} from "./facilityType";

export class Facility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  rentTypeId?: RentType;
  facilityTypeId?: FacilityType;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloor?: number;
  facilityFree?: string;
}
