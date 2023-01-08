import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SanPham} from "../../sanpham/model/sanPham";
import {SanphamService} from "../../sanpham/service/sanpham.service";
import {LohangService} from "../service/lohang.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  reactiveFormCreate: FormGroup;
  sanPhamList: SanPham[] = [];

  constructor(private _sanPhamService: SanphamService, private _loHangService: LohangService, private _toastService: ToastrService) {
    _sanPhamService.getAll().subscribe(value => {
      this.sanPhamList = value;
    })
    this.reactiveFormCreate = new FormGroup(
      {
        id: new FormControl('', []),
        maLoHang: new FormControl('', [Validators.required, Validators.pattern("^[L][H][-]\\d{4}$")]),
        sanPham: new FormControl({
          "id": 1,
          "tenSanPham": "Sting",
          "xuatXu": "Trung Quoc",
          "giaTien": 100,
          "donVi": "Thung"
        }, [Validators.required]),
        soLuong: new FormControl('', [Validators.required, Validators.min(0)]),
        ngayNhapHang: new FormControl('', [Validators.required]),
        ngaySanXuat: new FormControl('', [Validators.required]),
        ngayHetHan: new FormControl('', [Validators.required])
      }
    )
  }

  ngOnInit(): void {
  }

  cpw(num1: SanPham, num2: SanPham): boolean {
    return num1.tenSanPham == num2.tenSanPham;
  }

  reset() {
    this.reactiveFormCreate = new FormGroup(
      {
        id: new FormControl('', []),
        maLoHang: new FormControl('', [Validators.required, Validators.pattern("^[L][H]\\d{4}$")]),
        sanPham: new FormControl({
          "id": 1,
          "tenSanPham": "Sting",
          "xuatXu": "Trung Quoc",
          "giaTien": 100,
          "donVi": "Thung"
        }, [Validators.required]),
        soLuong: new FormControl('', [Validators.required, Validators.min(0)]),
        ngayNhapHang: new FormControl('', [Validators.required]),
        ngaySanXuat: new FormControl('', [Validators.required]),
        ngayHetHan: new FormControl('', [Validators.required])
      }
    )
  }

  saveCreate() {
    if (this.reactiveFormCreate.valid) {
      this.showToast();
      this._loHangService.saveCreate(this.reactiveFormCreate.value).subscribe(value => {
        alert('Thêm mới thành công');
      })
    }
  }

  showToast() {
    this._toastService.success('Thêm mới thành công', 'Thêm Mới', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
      closeButton: true
    })

  }
}
