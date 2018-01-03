import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  contacts: object;

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contacts = [
      {
      "id" : "resume",
      "name" : "Resume",
      "icon" : "fi-page-filled",
      "URL" : "/res/resume-faherty.pdf"
      },
      {
      "id" : "email",
      "name" : "Email",
      "icon" : "fi-mail",
      "URL" : "mailto:hello@enemyspeak.com"
      },
      {
      "id" : "twitter",
      "name" : "Twitter",
      "icon" : "fi-social-twitter",
      "URL" : "https://twitter.com/enemyspeak"
      },
      {
      "id" : "tumblr",
      "name" : "Blog",
      "icon" : "fi-social-tumblr",
      "URL" : "http://blog.enemyspeak.com/"
      },
      {
      "id" : "art-tumblr",
      "name" : "Art Blog",
      "icon" : "fi-social-tumblr",
      "URL" : "http://paint.enemyspeak.com/"
      },
      {
      "id" : "instagram",
      "name" : "Instagram",
      "icon" : "fi-social-instagram",
      "URL" : "https://www.instagram.com/enemyspeaks/"
      },
      {
      "id" : "github",
      "name" : "Github",
      "icon" : "fi-social-github",
      "URL" : "https://github.com/enemyspeak"
      }
    ]
    });
  }
}
