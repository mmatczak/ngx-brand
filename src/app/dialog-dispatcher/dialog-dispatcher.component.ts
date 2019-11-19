import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dialog-dispatcher',
  template: ''
})
export class DialogDispatcherComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    // brand = t-mobile
    const brand = 't-mobile';
    this.router.navigate([brand, 'a']);
  }
}
