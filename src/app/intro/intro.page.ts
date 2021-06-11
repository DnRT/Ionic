import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Slide } from 'src/app/models/slide.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides: Slide[]=[{
    title: "Slide inicial",
    description: "Bienvenido a Platzi Music Test",
    icon: "logo-angular"
  },
  {
    title: "Descripcion",
    description: "Esta aplicacion te permite reproducir tus canciones favoritas de tus artistas favoritos",
    icon: "play"
  },
  {
    title: "Donde quieras, cuando quieras",
    description: "Al ser una aplicacion movil puedes reproducir tu musica de forma sencilla en cualquier lugar, sea el camino a casa despues del trabajo como por ocio acostado en tu cama",
    icon: "bicycle"
  },
  {
    title: "Es tu turno",
    description: "Es hora de que empieces a usar la aplicaciony para avivar la fiesta",
    icon: "thumbs-up"
  }
];
  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }
  async endIntro(){
    await this.storage.create();
    this.storage.set("IntroShowed",true);
    this.router.navigateByUrl('/home');
  }

}
