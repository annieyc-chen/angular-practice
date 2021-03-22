import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  ngOnInit() {
    console.log('App Component OnInit')
  }
  ngOnChanges() {
    console.log('App Component OnChanges')
  }
  ngOnDestroy() {
    console.log('App Component OnDestroy')
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/