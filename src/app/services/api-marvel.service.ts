import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, Result } from '../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class ApiMarvelService {
  private readonly API = environment.characters;

  constructor(private readonly http: HttpClient) {}

  getAllCharacters(): Observable<Character> {
    return this.http.get<Character>(this.API);
  }
}
