import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-bootstrap-demo';
  checkModel: { left?: boolean; middle?: boolean; right?: boolean } = { left: false, middle: true, right: false };
}
