import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-themed-dialog',
  templateUrl: './themed-dialog.component.html',
  styleUrls: ['./themed-dialog.component.scss']
})
export class ThemedDialogComponent implements OnInit {
  @HostBinding('class') brandClass;

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe(params => {
      if (params.has('brand')) {
        this.brandClass = params.get('brand');
      }
    });
  }

  ngOnInit() {
  }

}
