import { Component, OnInit } from '@angular/core';
import { PaginationService } from "../list-view/pagination.service";

@Component({
  selector: 'sl-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {

  meme;
  constructor( private pag: PaginationService) { }

  ngOnInit() {
    this.meme = this.pag.speciments;
  }

  newMethod() {
    console.log(this.meme);
  }

}
