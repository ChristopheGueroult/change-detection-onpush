import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  check() {
    console.log('CD UI');
  }
}
