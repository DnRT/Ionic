import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userImage = 'assets/img/user.jpg';
  pic:SafeResourceUrl;
  constructor() { }

  ngOnInit() {
  }
  takePicture(){
  }

}
