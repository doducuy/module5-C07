import {CustomerType} from "../../customer-type/model/customerType";

export interface Customer {
  id?:number;
  name: string;
  gender: number;
  rank: number;
  customerType: CustomerType
}
