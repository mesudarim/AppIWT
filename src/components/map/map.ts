import { Component } from '@angular/core';
import {} from '@types/googlemaps';

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  private map: google.maps.Map;


  public init(lat:number, long:number) {

        this.map = new google.maps.Map(document.getElementById(`map`), {
        center: new google.maps.LatLng(lat, long),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
     });

  }

}
