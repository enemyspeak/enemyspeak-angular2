import {Component} from '@angular/core';
import { DetailItem, } from './detail';
import { TESTITEM } from './testItems';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'detail',
  styleUrls: ['./detail.component.css'],
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  project = TESTITEM;
  // project: string;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.project = params['project'];
      // if (this.project) {
      //   console.log(this.project);
      //   // this.repos = this.github.getReposForOrg(this.org);
      // }
    });
  }
}
