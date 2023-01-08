import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SanPham} from "../model/sanPham";

@Injectable({
  providedIn: 'root'
})
export class SanphamService {
  URL_SANPHAM = "http://localhost:3000/sanPham"

  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<SanPham[]> {
    return this._httpClient.get<SanPham[]>(this.URL_SANPHAM);
  }
}
