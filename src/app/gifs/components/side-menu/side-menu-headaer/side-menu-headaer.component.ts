import { Component } from '@angular/core';
import { environment } from '@enviroments/environment';

@Component({
  selector: 'gifs-side-menu-headaer',
  templateUrl: "./side-menu-headaer.component.html",
})
export class SideMenuHeadaerComponent {
  envs = environment;
}
