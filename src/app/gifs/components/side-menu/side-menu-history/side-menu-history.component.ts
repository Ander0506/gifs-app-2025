import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'gifs-side-menu-history',
  imports: [
    RouterLink
  ],
  templateUrl: './side-menu-history.component.html',
})
export class SideMenuHistoryComponent {
  history = input.required<string[]>();
}
