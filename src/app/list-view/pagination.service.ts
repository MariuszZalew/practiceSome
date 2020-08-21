import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  chars_url: string = 'http://localhost:3000/characters?_page=';
  search_url: string = 'http://localhost:3000/characters?_limit=10&q=';
  pagChars;

  constructor( private http: HttpClient) { }

  getChars(pageNum: number) {
    this.http.get(this.chars_url + pageNum).subscribe( characters => this.pagChars = characters);
  }

  searchChars(char: string) {
    this.http.get(this.search_url + char).subscribe( characters => this.pagChars = characters);
  }

  log() {
    console.log(this.pagChars);
  }
  
}