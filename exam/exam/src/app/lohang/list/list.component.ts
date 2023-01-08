import {Component, OnInit} from '@angular/core';
import {LoHang} from "../model/loHang";
import {LohangService} from "../service/lohang.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  page: number = 1;
  loHangList: LoHang[] | undefined;
  loHang?: LoHang;

  constructor(private _loHangService: LohangService, private _toastService: ToastrService) {
    _loHangService.getAll().subscribe(data => {
      this.loHangList = data;
    })
  }

  ngOnInit(): void {
  }

  infoDelete(item: LoHang) {
    this.loHang = item;
  }

  deleteLohang() {
    this._loHangService.deleteLoHang(this.loHang?.id).subscribe(data => {
      this._loHangService.getAll().subscribe(data => {
        this.loHangList = data;
      });
      this.showToast();
      alert("Xóa Thành Công !");
    })
  }

  search(value: string, value1: string) {
    this._loHangService.findByNameAndNgayHetHan(value, value1).subscribe(data => {
      this.loHangList = data;
    })
  }

  showToast() {
    this._toastService.success('Xóa Thành Công ', 'Xóa', {
      timeOut: 5000,
      positionClass: 'toast-top-center',
      closeButton: true
    })
  }
}
