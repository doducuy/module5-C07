import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] | undefined;
  page: number = 1;
  customer?: Customer;

  constructor(private _customerService: CustomerService, private _router: Router, private _toastService: ToastrService) {
    _customerService.getAll().subscribe(data => {
      this.customerList = data;
    })
  }

  ngOnInit(): void {
  }

  search(value: string, value2: string) {
    this._customerService.findByNameAndType(value, value2).subscribe(data => {
      this.customerList = data;
    })
  }

  deleteCustomer() {
    // @ts-ignore
    this._customerService.deleteCustomer(this.customer.id).subscribe(data => {
      this.showToast();
      this._customerService.getAll().subscribe(value => {
        this.customerList = value;
      })
    })
  }

  showToast() {
    this._toastService.success('Xóa Thành Công ', 'Xóa', {
      timeOut: 5000,
      positionClass: 'toast-top-center',
      closeButton: true
    })
  }

  infoDelete(item: Customer) {
    this.customer = item;
  }
}
