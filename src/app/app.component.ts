import { Component } from '@angular/core';
import { CurrentSystemComponent} from "./components/current-system/current-system.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [CurrentSystemComponent]
})
export class AppComponent {
  title = 'Angular 6 Application';
}

