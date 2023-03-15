import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PageCongcudungcuDto} from "../../dto/page-congcudungcu-dto";
import {CongCuDungCu} from "../entity/CongCuDungCu";

@Injectable({
  providedIn: 'root'
})
export class CongcudungcuService {
  URL_CONGCUDUNGCU_LIST = 'http://localhost:8080/api/congcudungcu';

  constructor(private httpClient: HttpClient) {

  }

  getAllAndSearch(nameSearch: string,
                  hangSearch: string,
                  pageNumber: number): Observable<PageCongcudungcuDto> {
    return this.httpClient.get<PageCongcudungcuDto>(this.URL_CONGCUDUNGCU_LIST + '/list-search' +
      '?nameSearch=' + nameSearch +
      '&hangSearch=' + hangSearch +
      '&page=' + pageNumber)
  }

  saveCreate(congCuDungCu: CongCuDungCu): Observable<CongCuDungCu> {
    return this.httpClient.post<CongCuDungCu>(this.URL_CONGCUDUNGCU_LIST + '/save', congCuDungCu)
  }
}
