import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../customer/model/customer";
import {CustomerType} from "../model/customerType";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  URL_CUSTOMERTYPE = "http://localhost:3000/customerType";

  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<CustomerType[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMERTYPE);
  }
}

