import { Gif } from "../interfaces/gif.interface";
import { GifphyItem } from "../interfaces/giphy.interface";

export class GifMapper {
  static mapGifphyItemToGif( item: GifphyItem ): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    }
  }

  static mapGifphyItemsToGifs( items: GifphyItem[] ): Gif[] {
    return items.map( item => this.mapGifphyItemToGif(item) );
  }

}
