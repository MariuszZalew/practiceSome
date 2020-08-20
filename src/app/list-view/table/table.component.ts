import { Component, OnInit } from '@angular/core';
import { PaginationService } from "../pagination.service";

@Component({
  selector: 'sl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  constructor( public pag: PaginationService) { }
  
  ngOnInit() {
    this.pag.getChars(1);
  }

}
