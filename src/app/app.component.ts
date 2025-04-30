import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';
import {ToolbarComponent} from './public/components/toolbar/toolbar.component';
import {FooterComponent} from './public/components/footer/footer.component';
import {BiographyContentComponent} from './biographies/pages/biography-content/biography-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    LanguageSwitcherComponent,
    ToolbarComponent,
    FooterComponent,
    BiographyContentComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upc2402si729pc1wx55u';
}
