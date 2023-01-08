import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoHang} from "../model/loHang";

@Injectable({
  providedIn: 'root'
})
export class LohangService {
  URL_LOHANG = "http://localhost:3000/lohang"

  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<LoHang[]> {
    return this._httpClient.get<LoHang[]>(this.URL_LOHANG);
  }

  findByNameAndNgayHetHan(name: string, ngayHetHan: string): Observable<LoHang[]> {
    return this._httpClient.get<LoHang[]>(this.URL_LOHANG +
      "?sanPham.tenSanPham_like=" + name + "&ngayHetHan_like=" + ngayHetHan);
  }

  deleteLoHang(id: number | undefined): Observable<LoHang> {
    return this._httpClient.delete<LoHang>(this.URL_LOHANG + "/" + id);
  }

  saveCreate(loHang: LoHang): Observable<LoHang> {
    return this._httpClient.post<LoHang>(this.URL_LOHANG, loHang);
  }
}
