import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {Dictionary} from "../model/dictionary";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  constructor(private _dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }
dictionaryList: Dictionary[]= this._dictionaryService.getAll();
}
