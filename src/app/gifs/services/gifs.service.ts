import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@enviroments/environment';

import { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';

import { GifMapper } from '../mappers/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const LOCALSTORAGE_GIF = 'gifs'

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(LOCALSTORAGE_GIF);
  const gifs = JSON.parse(gifsFromLocalStorage || '{}');
  return gifs;
}

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect(() => {
    const history = JSON.stringify(this.searchHistory());
    localStorage.setItem('LOCALSTORAGE_GIF', history);
  })

  loadTrendingGifs(): void {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/trending`,
      {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        }
      }
    ).subscribe( (response) => {
      const gifs = GifMapper.mapGifphyItemsToGifs(response.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
    })
  }

  searchGifs( query: string ): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/search`,
      {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        }
      }
    ).pipe(
      map((response) => GifMapper.mapGifphyItemsToGifs(response.data)),
      //Historial
      tap((items) => {
        this.searchHistory.update((history) => ({
          ...history,
          [query.toLocaleLowerCase()]: items,
        }));
      })
    )
  }

  getHistory(query: string): Gif[] {
    return this.searchHistory()[query] || [];
  }

}
