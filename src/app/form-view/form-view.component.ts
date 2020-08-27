import { Component, OnInit } from '@angular/core';
import { PaginationService } from "../list-view/pagination.service";
// import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'sl-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {

  constructor( public pag: PaginationService, private router: Router) { }

  ngOnInit() {
    this.pag.getSpecies();
  }

  submitChar(char: NgForm) {
    console.log(char.value, char.valid);
    this.router.navigate(['']);
  }
}
