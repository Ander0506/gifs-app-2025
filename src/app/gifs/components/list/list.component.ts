import { Component, computed, input } from '@angular/core';

import { ListItemComponent } from './list-item/list-item.component';

import { Gif } from '../../interfaces/gif.interface';

interface ListImages {
  images: string[]
}

@Component({
  selector: 'gifs-list',
  imports: [
    ListItemComponent,
  ],
  templateUrl: './list.component.html',
})
export class ListComponent {

  gifs = input.required<Gif[]>()

  columns = input<number>(3)

  columnsData = computed<number>(() => Math.round(this.gifs().length / this.columns()) )


  styleColumns = `grid-template-columns: repeat( ${this.columns()} , minmax(0, 1fr))`;

  getMasonry(): ListImages[] {

    let listColumns: ListImages[] = [];
    let columns: number = 0;

    this.gifs().forEach((element) => {

      listColumns[columns] ? listColumns[columns].images.push(element.url) : listColumns[columns] = {images: [element.url]};

      columns + 1 === this.columns() ? columns = 0 : columns ++;

    });

    return listColumns;
  }
}
