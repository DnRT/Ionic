import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PlatziMusicService } from '../services/platzi-music.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  homeSlidesOptions = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
    };
  artistas: any[] = [];
  SONGS: any[] = [];
  albums: any[] = [];
  song: {
    preview_url: string,
    playing: boolean,
    name: string
  } = {
    preview_url: "",
    playing: false,
    name: ""
  };
  currentSong: HTMLAudioElement;
  newTime: number;
  constructor(
    private router: Router,
    private musicService: PlatziMusicService,
    private modalController: ModalController
    
  ) {}
  ngOnInit(){
    this.artistInitial();
  }
  enterLogIn(){
    this.router.navigateByUrl('/login');
  }
  artistInitial(){
    this.musicService.fetchAPI().then(resp =>{
      this.artistas=this.musicService.returnJSON();
      this.SONGS=resp.albums.items.filter(r=> r.album_type==="single");
      this.albums=resp.albums.items.filter(r=> r.album_type==='album');
    });
  }
  printOut(){
    console.log(this.artistas);
    console.log(this.SONGS);
    console.log(this.albums);
  }
  async getSongs(artist){
    const songs = await this.musicService.getTopTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    });
    modal.onDidDismiss().then(dataR=>{
      this.song=dataR.data;
    });
    return await modal.present();
  }
  play(){
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventListener("timeupdate", ()=>{
      this.newTime=this.currentSong.currentTime/this.currentSong.duration;
    });
    this.song.playing=true;
  }
  pause(){
    this.currentSong.pause();
    this.song.playing=false;
  }
  parseTime(time: number){
    if(time){
      const partTime =parseInt(time.toString().split(".")[0],10);
      let minutes = Math.floor(partTime/60).toString();
      if(minutes.length===1){
        minutes="0"+minutes;
      }
      let seconds = (partTime%60).toString();
      if(seconds.length===1){
        seconds="0"+seconds;
      }
      return minutes+":"+seconds;
    }
    else{
      return "00.00";
    }
  }
  async showSongsByAlbum(album) {
    const songs = await this.musicService.getAlbumTracks(album.id);
    const modal = await this.modalController.create({
    component: SongsModalPage,
    componentProps: {
    songs: songs.items,
    artist_or_album: album.name
    }
    });
    modal.onDidDismiss().then(dataReturned => {
      console.log(dataReturned);
      this.song = dataReturned.data;
    });
    return await modal.present();
    }
}
