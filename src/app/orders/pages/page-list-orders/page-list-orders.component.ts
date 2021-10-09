import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageListOrdersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  check() {
    console.log('CD LIST ORDERS');
  }
}
