import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BreadCrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  firstLevel = 'Home';

  constructor(private breadCrumbService: BreadCrumbService) { }

  ngOnInit() {
    this.breadCrumbService.routeChanges()
      .subscribe((result) => {
        this.firstLevel = result;
        console.log(this.firstLevel);
        console.log(result);
      });
  }
}
