import { Component } from '@angular/core';
import { SideMenuHeadaerComponent } from './side-menu-headaer/side-menu-headaer.component';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options.component';

@Component({
  selector: 'gifs-side-menu',
  imports: [
    SideMenuHeadaerComponent,
    SideMenuOptionsComponent
  ],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent { }
