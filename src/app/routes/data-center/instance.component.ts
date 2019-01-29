/**
 * 数据中心实例
 * @author Philip
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-center-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.less']
})
export class DataCenterInstance implements OnInit {
  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {

  }
}
