import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SongsModalPageModule } from './songs-modal/songs-modal.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    SongsModalPageModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsKeyApi
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule
    };
  }
}
