import { Component, inject } from '@angular/core';
import { SideMenuHeadaerComponent } from './side-menu-headaer/side-menu-headaer.component';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options.component';
import { SideMenuHistoryComponent } from "./side-menu-history/side-menu-history.component";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-side-menu',
  imports: [
    SideMenuHeadaerComponent,
    SideMenuOptionsComponent,
    SideMenuHistoryComponent
],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  gifService = inject(GifService);
}
