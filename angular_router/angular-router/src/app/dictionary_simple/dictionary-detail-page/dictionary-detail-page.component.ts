import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Dictionary} from "../model/dictionary";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary-detail-page',
  templateUrl: './dictionary-detail-page.component.html',
  styleUrls: ['./dictionary-detail-page.component.css']
})
export class DictionaryDetailPageComponent implements OnInit {
  word: Dictionary|undefined| null;

  constructor(private _activatedRouter: ActivatedRoute, private _dictionaryService: DictionaryService) {
    this._activatedRouter.paramMap.subscribe(data => {
        const name = data.get("name");
        if(name!=null){
          this.word = _dictionaryService.findByName(name);
        }
      },
      error => {

      },
      () => {

      })

  }

  ngOnInit(): void {
  }

}
