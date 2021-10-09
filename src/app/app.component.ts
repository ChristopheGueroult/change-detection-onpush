import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'crm-cd';
  constructor() {}

  check() {
    console.log('CD APP');
  }
  changeTitle() {
    this.title = 'new title';
  }
}
