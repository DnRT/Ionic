import { Injectable } from '@angular/core';
import * as ITEMS from './artist.json';

@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  constructor() { }
  /*returnJSON():any[]{
    const aux:any[] = ITEMS.items;
    return aux;
  }*/

  fetchAPI(){
    return fetch("https://platzi-music-api.herokuapp.com/browse/new-releases")
    .then(response => response.json());
  }
  getTopTracks(id){
    return fetch("https://platzi-music-api.herokuapp.com/artists/"+id+"/top-tracks?country=CO")
      .then(response=> response.json());
  }
  getAlbumTracks(albumId) {
    return fetch("https://platzi-music-api.herokuapp.com/albums/"+albumId+"/tracks?country=CO")
    .then(response => response.json());
    }
}
