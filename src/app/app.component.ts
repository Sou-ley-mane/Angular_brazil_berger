import { Component } from '@angular/core';
import { IMenu } from './menu/IMenu';
import { CatalogueService } from './service/catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BrasilBurger';
}
