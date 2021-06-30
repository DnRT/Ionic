import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  ngZone: any;
  latitude: number=20;
  longitude: number=-50;
  zoom: number=14;
  searchElementRef: any;

  constructor(
    private mapLoader:MapsAPILoader
  ) {
    this.mapLoader.load().then(() => {
    var autocomplete = new window['google'].maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
    });
    autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
            //get the place result
            let place:google.maps.places.PlaceResult = autocomplete.getPlace();

            //verify result
            if (place.geometry === undefined || place.geometry === null) {
                return;
            }

            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
        });
    });
});
}
  ngOnInit() {
  }

}
