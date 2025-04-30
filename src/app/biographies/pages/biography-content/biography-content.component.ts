import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {BiographyGridViewComponent} from '../../components/biography-grid-view/biography-grid-view.component';

@Component({
  selector: 'app-biography-content',
  imports: [
    TranslatePipe,
    BiographyGridViewComponent
  ],
  templateUrl: './biography-content.component.html',
  standalone: true,
  styleUrl: './biography-content.component.css'
})
export class BiographyContentComponent {

}
