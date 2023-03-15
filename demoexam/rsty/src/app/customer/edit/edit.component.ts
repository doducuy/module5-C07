import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../model/customer";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";
import {CustomerType} from "../../customer-type/model/customerType";
import {CustomerTypeService} from "../../customer-type/service/customer-type.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  customer?: Customer;
  reactiveFormEdit?: FormGroup;
  customerTypeList: CustomerType[] = [];

  constructor(private _activatedRouter: ActivatedRoute, private _customerService: CustomerService,
              private _customerTypeService: CustomerTypeService, private _router: Router,private _toastService: ToastrService) {
    _activatedRouter.paramMap.subscribe(data => {
      const id = data.get("id");
      if (id != null) {
        _customerService.findById(parseInt(id)).subscribe(data => {
          this.customer = data;
          this.reactiveFormEdit = new FormGroup({
            id: new FormControl(this.customer?.id, []),
            name: new FormControl(this.customer?.name, []),
            gender: new FormControl(this.customer?.gender, []),
            rank: new FormControl(this.customer?.rank, []),
            customerType: new FormControl(this.customer?.customerType, []),
          });
          this._customerTypeService.getAll().subscribe(data => {
            this.customerTypeList = data;
          });
        });
      }
    });
  }

  ngOnInit(): void {
  }

  compId(item1: any, item2: any): any {
    return item1.id == item2.id;
  }

  saveEdit() {
    console.log(this.reactiveFormEdit?.value)
    this._customerService.saveEdit(this.reactiveFormEdit?.value.id, this.reactiveFormEdit?.value).subscribe(data => {
      this.showToast();
      this._router.navigateByUrl("/customer/list");
    })
  }
  showToast() {
    this._toastService.success('Edit Thành Công ', 'Edit', {
      timeOut: 5000,
      positionClass: 'toast-top-center',
      closeButton: true
    })
  }
}
