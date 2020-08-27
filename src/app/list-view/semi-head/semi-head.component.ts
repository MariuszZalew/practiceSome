import { Component, OnInit } from '@angular/core';
import { PaginationService } from "../pagination.service";
// import { fromEvent, Observable } from 'rxjs';
// import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'sl-semi-head',
  templateUrl: './semi-head.component.html',
  styleUrls: []
})
export class SemiHeadComponent implements OnInit {

  constructor( private pag: PaginationService) { }

  ngOnInit() {
  }

  searchMe(searchString) {
    this.pag.searchChars(searchString.target.value);
  }
}
