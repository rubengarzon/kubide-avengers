import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiMarvelService {
  private readonly API = environment.characters;

  constructor(private readonly http: HttpClient) {}
}
