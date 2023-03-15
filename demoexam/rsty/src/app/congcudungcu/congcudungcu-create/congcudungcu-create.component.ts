import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CongCuDungCu} from "../entity/CongCuDungCu";
import {CongcudungcuService} from "../service/congcudungcu.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-congcudungcu-create',
  templateUrl: './congcudungcu-create.component.html',
  styleUrls: ['./congcudungcu-create.component.css']
})
export class CongcudungcuCreateComponent implements OnInit {
  // @ts-ignore
  reactiveFormCreate: FormGroup;
  congCuDungCuList: CongCuDungCu[] = [];

  constructor(private congcudungcuService: CongcudungcuService, private toastrService: ToastrService) {
    this.reactiveFormCreate = new FormGroup(
      {
        id: new FormControl('', []),
        maCongCuDungCu: new FormControl('', [Validators.required]),
        tenCongCuDungCu: new FormControl('', [Validators.required]),
        hangSanXuat: new FormControl('', [Validators.required]),
        donVi: new FormControl('', [Validators.required]),
        soLuong: new FormControl('', [Validators.required,
          Validators.pattern("\\d*"), Validators.min(0)])
      }
    )
  }

  ngOnInit(): void {
  }

  saveCreate() {
    if (this.reactiveFormCreate.valid) {
      this.showToast();
      console.log(this.reactiveFormCreate.value);
      this.congcudungcuService.saveCreate(this.reactiveFormCreate.value).subscribe(value => {

      })
    }
  }

  showToast() {
    this.toastrService.success('Thêm mới thành công', 'Thêm Mới', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
      closeButton: true
    })

  }

  reset() {
    this.reactiveFormCreate = new FormGroup(
      {
        id: new FormControl('', []),
        maCongCuDungCu: new FormControl('', [Validators.required]),
        tenCongCuDungCu: new FormControl('', [Validators.required]),
        hangSanXuat: new FormControl('', [Validators.required]),
        donVi: new FormControl('', [Validators.required]),
        soLuong: new FormControl('', [Validators.required,
          Validators.pattern("\\d"), Validators.min(0)])
      }
    )
  }
}
