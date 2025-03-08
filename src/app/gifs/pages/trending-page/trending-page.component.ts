import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ListComponent } from "../../components/list/list.component";

import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [
    ListComponent
  ],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent {
  gifService = inject(GifService);
}
