import { Component, OnInit } from '@angular/core';
import { PaginationService } from "../pagination.service";

@Component({
  selector: 'sl-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: []
})
export class NavigationComponent implements OnInit {

  current: number = 1;

  constructor( private pag: PaginationService ) { }

  ngOnInit() {
  }

  pageSelect(num: number) {
    this.pag.getChars(num);
    this.current = num;
    console.log(this.current);
  }
}
