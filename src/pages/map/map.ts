import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {} from '@types/googlemaps';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @Input() mapID: string = "";
  private map: google.maps.Map;


  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

  let previousPosition = null;
  function initialize() {
        this.map = new google.maps.Map(document.getElementById("map_canvas"), {
              zoom: 19,
              center: new google.maps.LatLng(48.858565, 2.347198),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            });
      }

      if (navigator.geolocation)
        var watchId = navigator.geolocation.watchPosition(successCallback, null, {enableHighAccuracy:true});
      else
        alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");

      function successCallback(position){
        this.map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          map: this.map
        });
        if (this.previousPosition){
          var newLineCoordinates = [
             new google.maps.LatLng(this.previousPosition.coords.latitude, this.previousPosition.coords.longitude),
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude)];

          var newLine = new google.maps.Polyline({
            path: newLineCoordinates,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2
          });
          this.newLine.setMap(this.map);
        }
        this.previousPosition = position;
      };


  }

  // public init(lat:number, long:number, zoom:number=12) {
  //
  //   this.map = new google.maps.Map(document.getElementById(`map_canvas_${this.mapID}`), {
  //       center: new google.maps.LatLng(lat, long),
  //       zoom: zoom,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //    });

  }
