import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage implements OnInit {

  songs: any[];
  artist: string ='';
  menu: any;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.songs = this.navParams.data.songs;
    this.artist = this.navParams.data.artist;
  }
  async selectSong(song){
    await this.modalController.dismiss(song);
  }
}
