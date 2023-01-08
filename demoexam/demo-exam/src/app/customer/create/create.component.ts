import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerTypeService} from "../../customer-type/service/customer-type.service";
import {CustomerType} from "../../customer-type/model/customerType";
import {CustomerService} from "../service/customer.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  reactiveFormCreate: FormGroup;
  customerTypeList: CustomerType[] = [];

  constructor(private _router: Router,private _customerTypeService: CustomerTypeService, private _customerService: CustomerService, private _toastService:ToastrService) {
    _customerTypeService.getAll().subscribe(value => {
      this.customerTypeList = value;
    })
    this.reactiveFormCreate = new FormGroup(
      {
        id: new FormControl('', []),
        name: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]{3,50}$")]),
        gender: new FormControl('0', []),
        rank: new FormControl('soSad', [Validators.required,Validators.minLength(2)]),
        customerType: new FormControl({id: 1, name: "Platinum"}, [])
      }
    )
  }

  ngOnInit(): void {
  }

  saveCreate() {
    if(this.reactiveFormCreate.valid){
      this._customerService.saveCreate(this.reactiveFormCreate.value).subscribe(value => {
        this.showToast();
      })
    }
  }

  cpw(num1: CustomerType, num2: CustomerType): boolean {
    return num1.id == num2.id;
  }
  showToast() {
    this._toastService.success('Thêm Mới Thành Công ', 'Thêm Mới', {
      timeOut: 5000,
      positionClass: 'toast-top-center',
      closeButton: true
    })
  }

  reset() {
    this.reactiveFormCreate = new FormGroup(
      {
        id: new FormControl('', []),
        name: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]{2,30}$")]),
        gender: new FormControl('0', []),
        rank: new FormControl('', []),
        customerType: new FormControl({id: 1, name: "Platinum"}, [])
      }
    )
  }
}
