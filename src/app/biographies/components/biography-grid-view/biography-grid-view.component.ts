import {Component, OnInit} from '@angular/core';
import {BiographiesService} from '../../services/biographies.service';
import {Biography} from '../../models/biography.entity';
import {MatGridListModule} from '@angular/material/grid-list';
import {BiographyCardComponent} from '../biography-card/biography-card.component';

@Component({
  selector: 'app-biography-grid-view',
  imports: [
    MatGridListModule,
    BiographyCardComponent
  ],
  templateUrl: './biography-grid-view.component.html',
  standalone: true,
  styleUrl: './biography-grid-view.component.css'
})
export class BiographyGridViewComponent implements OnInit {

  biographies: Biography[] = [];

  constructor(private biographyService: BiographiesService) {
  }

  /**
   * @summary Allows to load the biographies from the service when the component is initialized.
   * @author Riz
   */
  ngOnInit(): void {
    this.biographyService.getBiographies().subscribe((biographies) => {
      this.biographies = biographies;
    });
  }
}
