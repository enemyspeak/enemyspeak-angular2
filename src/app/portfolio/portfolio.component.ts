import {Component} from '@angular/core';
import { ListItem, } from './portfolio';
import { PORTFOLIOITEMS, } from './portfolioItems';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'portfolio',
  styleUrls: ['./portfolio.component.css'],
  templateUrl: './portfolio.component.html'
})
export class ListComponent {
  listItems = PORTFOLIOITEMS;
  project: string;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.project = params['project'];
      if (this.project) {
        console.log(this.project);
        // this.repos = this.github.getReposForOrg(this.org);
      }
    });
  }
}
