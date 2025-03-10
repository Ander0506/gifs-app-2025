import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  imageUrl = input.required<string>();
}
