import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  chars_url: string = 'http://localhost:3000/characters?_page=';
  pagChars;
  
  constructor( private http: HttpClient) { }

  getChars(pageNum: number) {
    this.http.get(this.chars_url + pageNum).subscribe( characters => this.pagChars = characters);
  }

  log() {
    console.log(this.pagChars);
  }
  
}
