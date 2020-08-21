import { Component, OnInit } from '@angular/core';
import { PaginationService } from "../pagination.service";

@Component({
  selector: 'sl-semi-head',
  templateUrl: './semi-head.component.html',
  styleUrls: ['./semi-head.component.scss']
})
export class SemiHeadComponent implements OnInit {

  constructor( private pag: PaginationService) { }

  ngOnInit() {
  }

  searchMe(searchString) {
    this.pag.searchChars(searchString.target.value);
  }
}
