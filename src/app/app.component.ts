import {Component, OnInit} from '@angular/core';
import { Contact,CONTACTS } from './contact';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  contacts = CONTACTS;

  constructor() { }

  ngOnInit() {
  }
}
