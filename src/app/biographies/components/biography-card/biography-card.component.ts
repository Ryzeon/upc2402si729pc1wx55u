import {Component, Input} from '@angular/core';
import {Biography} from '../../models/biography.entity';
import {MatCardModule} from '@angular/material/card';
import {TranslatePipe} from '@ngx-translate/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-biography-card',
  imports: [
    MatCardModule,
    TranslatePipe,
    DatePipe
  ],
  templateUrl: './biography-card.component.html',
  standalone: true,
  styleUrl: './biography-card.component.css'
})
export class BiographyCardComponent {

  @Input() biography: Biography = {} as Biography;

}
