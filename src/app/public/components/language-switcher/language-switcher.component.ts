import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-language-switcher',
  imports: [
    MatButtonModule,
    MatButtonToggleGroup,
    MatButtonToggleModule
  ],
  templateUrl: './language-switcher.component.html',
  standalone: true,
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {

  currentLang = 'en';
  languages = ['en', 'es'];

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
