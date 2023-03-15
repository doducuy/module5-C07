import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL_CUSTOMER = "http://localhost:3000/customer";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URL_CUSTOMER + "/" + id);
  }

  saveEdit(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>(this.URL_CUSTOMER + "/" + id, customer)
  }

  findByNameAndType(name: string, type: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER +
      "?name_like=" + name + "&customerType.name_like=" + type);
  }

  deleteCustomer(id: number | undefined): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.URL_CUSTOMER + "/" + id)
  }

  saveCreate(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.URL_CUSTOMER, customer);
  }
}
