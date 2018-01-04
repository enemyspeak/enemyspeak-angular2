import {Component, OnInit} from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './contacts';

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
