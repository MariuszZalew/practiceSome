import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  chars_url: string = 'http://localhost:3000/characters?_page=';
  search_url: string = 'http://localhost:3000/characters?_limit=10&q=';
  species_url: string = 'http://localhost:3000/species';
  pagChars;
  speciments;

  constructor( private http: HttpClient) { }

  getChars(pageNum: number) {
    this.http.get(this.chars_url + pageNum).subscribe( characters => this.pagChars = characters);
  }

  searchChars(char: string) {
    this.http.get(this.search_url + char).subscribe( characters => this.pagChars = characters);
    console.log(this.pagChars);

  }

  log() {
    console.log(this.pagChars);
  }
  
  getSpecies() {
    this.http.get(this.species_url).subscribe( spec => this.speciments = spec );
  }
}