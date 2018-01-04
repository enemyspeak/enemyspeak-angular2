import {Component} from '@angular/core';
import { ListItem, } from './list';
import { HOMEITEMS, } from './homeItems';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'list',
  styleUrls: ['./list.component.css'],
  templateUrl: './list.component.html'
})
export class ListComponent {
  listItems = HOMEITEMS;
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
