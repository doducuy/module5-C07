import {Component, OnInit} from '@angular/core';
import {CongCuDungCu} from "../entity/CongCuDungCu";
import {CongcudungcuService} from "../service/congcudungcu.service";
import {ActivatedRoute} from "@angular/router";
import {PageCongcudungcuDto} from "../../dto/page-congcudungcu-dto";

@Component({
  selector: 'app-congcudungcu-list',
  templateUrl: './congcudungcu-list.component.html',
  styleUrls: ['./congcudungcu-list.component.css']
})
export class CongcudungcuListComponent implements OnInit {
  pageTotal: number | undefined = 0;
  pageNumber: number | undefined = 1;
  congCuDungCuList: CongCuDungCu[] | undefined;
  resultPage: PageCongcudungcuDto | undefined;
  nameSearch: string | undefined | null = '';
  hangSearch: string | undefined | null = '';
  congCuDungCu : CongCuDungCu| undefined;
  soLuongTrongKho: number | undefined=0;

  constructor(private congcudungcuService: CongcudungcuService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.goToPage(this.nameSearch, this.hangSearch,0);
  }

  goToPage(nameSearch: string, hangSearch: string, pageNumber: number): void {
    this.pageNumber = pageNumber;
    this.congcudungcuService.getAllAndSearch(nameSearch, hangSearch, pageNumber).subscribe(value => {
      this.pageTotal = value.totalPages;
      this.pageNumber = value.pageable?.pageNumber;
      this.congCuDungCuList = value.content;
      this.resultPage = value;
    })
  }
  search(value: string, value1: string): void{
    this.nameSearch = value;
    this.hangSearch = value1;
    this.pageNumber =0;
    this.goToPage(this.nameSearch, this.hangSearch, this.pageNumber)
  }

  muonCongCu(value: string) {
    // @ts-ignore
    this.soLuongTrongKho = this.soLuongTrongKho - parseInt(value);
  }
  //
  infoMuon(item: CongCuDungCu) {
    this.congCuDungCu =item;
    this.soLuongTrongKho = item.soLuong;
  }
}
