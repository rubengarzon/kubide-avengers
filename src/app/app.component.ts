import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from './services/api-marvel.service';
import { Character, Result } from './interfaces/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }
}
